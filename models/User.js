const { Schema, model, Types } = require("mongoose");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const schema = new Schema({
  role: { type: String, default: "user" },
  email: { type: String, required: true, unic: true, trim: true },
  password: { type: String, required: true, trim: true },
  username: { type: String, required: true, unic: true, trim: true },
  full_name: { type: String, required: true, unic: false, trim: true },
  room: { type: Number, required: true, unic: false },
  dormitory: { type: String, required: true, unic: false },
  profile_photo: { type: String },
  banner_photo: { type: String },
  roommates: [{ type: Types.ObjectId, ref: "User" }],
  personal_info: {
    age: { type: Number },
    native_city: { type: String, trim: true },
    speciality_code: { type: String, trim: true },
  },
  privacy_settings: {
    show_roommates: { type: Boolean, default: true },
    show_room: { type: Boolean, default: true },
    show_speciality_code: { type: Boolean, default: true },
  },
});

schema.pre("save", function (next) {
  if (this.isNew || this.isModified("password")) {
    const document = this;
    bcrypt.hash(document.password, saltRounds, function (err, hashedPassword) {
      if (err) {
        next(err);
      } else {
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});

schema.methods.isCorrectPassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
};

module.exports = model("User", schema);
