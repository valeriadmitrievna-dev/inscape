const AWS = require("aws-sdk");
const User = require("./models/User");

const credentials = new AWS.Credentials({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});
AWS.config.credentials = credentials;

module.exports = async (req, res, user_param) => {
  const {
    username
  } = req.decoded;
  const s3 = new AWS.S3();
  const fileContent = Buffer.from(req.files.file.data, "binary");
  const params = {
    Bucket: process.env.S3_BUCKET,
    Key: req.files.file.name,
    Body: fileContent,
  };
  s3.upload(params, async function (err, data) {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Problems with uploading"
      });
    }
    await User.findOneAndUpdate({
      username
    }, {
      [user_param]: data.Location
    });
    return res.status(200).json({
      url: data.Location
    });
  });
};