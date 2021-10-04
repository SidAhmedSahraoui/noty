const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

// model
const User = require("../models/User");

//Register a user
router.post(
  "/",
  [
    check("username", "Username").not().isEmpty(),
    check("email", "Email").isEmail(),
    check("password", "Password").isLength({
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
module.exports = router;
