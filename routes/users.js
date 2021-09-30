const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

// Register

router.post(
  "/",
  [
    check("username", "Username is required").not().isEmpty(),
    check("email", "Email is not valid").isEmail(),
    check("password", "Password must be at least 6 characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }
    const { username, email, phone, password } = req.body;

    try {
      let user = await User.findOne({
        $or: [{ email: email }, { username: username }],
      });

      if (user) {
        return res
          .status(400)
          .json([{ msg: "Username or Email already exists" }]);
      }

      user = new User({ username, email, phone, password });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 3600 * 1000,
        },
        (error, token) => {
          if (error) throw error;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// Update

router.put("/", auth, async (req, res) => {
  const { name, gender } = req.body;

  // New user object
  const new_user = {};

  if (name !== null) new_user.name = name;

  if (gender) new_user.gender = gender;

  try {
    let user = await User.findById(req.user.id);

    if (!user) return res.status(404).json([{ msg: "User not found" }]);

    user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: new_user },
      { new: true }
    ).select("-password");

    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// Update password
router.put(
  "/password",
  [
    auth,
    [
      check("old_password", "Old assword is required").exists(),
      check("new_password", "Password must be at least 6 characters").isLength({
        min: 6,
      }),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const { old_password, new_password } = req.body;

    try {
      let user = await User.findById(req.user.id);

      if (!user) return res.status(404).json([{ msg: "User not found" }]);

      const isMatch = await bcrypt.compare(old_password, user.password);

      if (!isMatch) {
        return res.status(400).json([{ msg: "Old password is incorrect" }]);
      }

      // New user object
      const new_user = {};
      const salt = await bcrypt.genSalt(10);
      new_user.password = await bcrypt.hash(new_password, salt);

      user = await User.findByIdAndUpdate(
        req.user.id,
        { $set: new_user },
        { new: true }
      ).select("-password");

      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
