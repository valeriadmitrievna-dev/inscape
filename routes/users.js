const Router = require("express");
const User = require("../models/User");
const router = Router();
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const withAuth = require("../middlewares/auth");
const uploadImageS3 = require("../s3-upload");

// User sign up
router.post(
  "/signup",
  [
    check("email", "Invalid email").isEmail(),
    check("username", "Invalid username").isLength({
      min: 8,
    }),
    check("password", "Invalid password").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          error: "Incorect data trying send request",
        });
      }

      const { username, full_name, password, email, dormitory, room } =
        req.body;

      if (!full_name) {
        return res.status(400).json({
          message: "Full name required 'string', but got 'undefined'",
        });
      }

      const candidateUserEmail = await User.findOne({
        email,
      });
      if (candidateUserEmail) {
        return res
          .status(400)
          .json({ error: "User with this email already exists" });
      }

      const candidateUserUsername = await User.findOne({
        username,
      });
      if (candidateUserUsername) {
        return res
          .status(400)
          .json({ error: "User with this username already exists" });
      }

      const roommates = [
        ...(await User.find({
          room,
          dormitory,
        }).populate("roommates")),
      ];

      // create user
      const newUser = new User({
        username,
        full_name: full_name.replace(/[' ']+/g, " ").trim(),
        password,
        email,
        dormitory,
        room,
        roommates: roommates.map((user) => user._id),
      });

      // add new user to roommates of other users of that room
      roommates.forEach(async (user) => {
        user.roommates.push(newUser);
        user.save(async (err) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              error: "Error on updating other users",
            });
          }
          await newUser.save(function (err, user) {
            if (err) {
              console.log(err);
              return res.status(500).json({
                error:
                  "500: Error registering new user please try again later.",
              });
            } else {
              const payload = { username: user.username };
              const token = jwt.sign(payload, process.env.SECRET, {
                expiresIn: "24h",
              });
              return res.status(200).json({ token });
            }
          });
        });
      });
    } catch (e) {
      console.log(e.message);
      res.status(500).json({
        error: "Something went wrong",
      });
    }
  }
);

// User sign in
router.post(
  "/signin",
  // [check("email", "Invalid email").isEmail()],
  async (req, res) => {
    try {
      const { email, username, password } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Invalid data when login in",
        });
      }
      const signInBy = username ? { username } : { email };
      await User.findOne(signInBy, function (err, user) {
        if (err) {
          console.error(err);
          res.status(500).json({
            error: "Internal error please try again",
          });
        } else if (!user) {
          res.status(404).json({
            error: "User not found",
          });
        } else {
          if (!bcrypt.compareSync(password, user.password)) {
            return res.status(500).json({
              error: "Wrong password",
            });
          }
          const payload = { username: user.username };
          const token = jwt.sign(payload, process.env.SECRET, {
            expiresIn: "24h",
          });
          return res.status(200).json({ token });
        }
      });
    } catch (e) {
      res.status(500).json({
        message: "Something was wrong",
      });
    }
  }
);

// get user data
router.get("/", withAuth, async (req, res) => {
  try {
    const { username } = req.decoded;
    await User.findOne({ username })
      .populate("roommates")
      .exec(function (err, user) {
        if (err) {
          console.error(err);
          res.status(500).json({
            error: "Internal error please try again",
          });
        } else if (!user) {
          res.status(404).json({
            error: "User not found",
          });
        } else {
          return res.status(200).json(user);
        }
      });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      error: "Something went wrong",
    });
  }
});

// upload profile photo for user
router.put("/upload/profile-photo", withAuth, async (req, res) => {
  try {
    await uploadImageS3(req, res, "profile_photo");
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// upload banner image for user
router.put("/upload/user-banner", withAuth, async (req, res) => {
  try {
    await uploadImageS3(req, res, "banner_photo");
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Update user privacy setting
router.put("/update/privacy", withAuth, async (req, res) => {
  try {
    const { username } = req.decoded;
    await User.findOne({ username }).exec(async function (err, user) {
      if (err) {
        console.error(err);
        res.status(500).json({
          error: "Internal error please try again",
        });
      } else if (!user) {
        res.status(404).json({
          error: "User not found",
        });
      } else {
        const privacy = user.privacy_settings;
        privacy[Object.keys(req.body)[0]] = Object.values(req.body)[0];
        await User.updateOne({ username }, { privacy_settings: privacy });
        res.status(201).json({
          setting: Object.keys(req.body)[0],
          value: Object.values(req.body)[0],
        });
      }
    });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Delete user permanently
router.delete("/delete", withAuth, async (req, res) => {
  try {
    const { username } = req.decoded;
    await User.findOneAndDelete({ username }, function (err, user) {
      if (err) {
        console.error(err);
        res.status(500).json({
          error: "Internal error please try again",
        });
      } else if (!user) {
        res.status(404).json({
          error: "User not found",
        });
      } else {
        res.status(200).json({ message: "User deleted" });
      }
    });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Get checking user data
router.get("/check/:username", async (req, res) => {
  const { username } = req.params;
  await User.findOne({ username })
    .populate("roommates")
    .exec(function (err, user) {
      if (err) {
        console.error(err);
        res.status(500).json({
          error: "Internal error please try again",
        });
      } else if (!user) {
        res.status(404).json({
          error: "User not found",
        });
      } else {
        return res.status(200).json(user);
      }
    });
});

// Update user info
router.put("/update/info", withAuth, async (req, res) => {
  try {
    const { username } = req.decoded;
    await User.findOne({ username }).exec(async function (err, user) {
      if (err) {
        console.error(err);
        res.status(500).json({
          error: "Internal error please try again",
        });
      } else if (!user) {
        res.status(404).json({
          error: "User not found",
        });
      } else {
        const privacy = user.privacy_settings;
        privacy[Object.keys(req.body)[0]] = Object.values(req.body)[0];
        await User.updateOne({ username }, req.body);
        res.status(201).json({
          setting: Object.keys(req.body)[0],
          value: Object.values(req.body)[0],
        });
      }
    });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Get all users short info
router.get("/all", withAuth, async (req, res) => {
  await User.find({}).then(function (users) {
    res.status(200).json(
      users.map((user) => {
        return {
          profile_photo: user.profile_photo,
          username: user.username,
          full_name: user.full_name,
        };
      })
    );
  });
});

module.exports = router;
