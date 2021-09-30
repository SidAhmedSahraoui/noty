const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Note = require("../models/Note");

// Get user notes
router.get("/", auth, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

// Get user favourite notes

router.get("/favorite", auth, async (req, res) => {
  try {
    const messages = await Message.find({
      user: req.user.id,
      is_fav: true,
    }).sort({
      date: -1,
    });
    res.json(messages);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

//  Save note

router.post(
  "/",
  [
    check("user_id", "user not found").not().isEmpty(),
    check("content", "note content is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    try {
      const { user_id, content, type } = req.body;

      let user = await User.find({ _id: user_id });

      if (!user || !user.length) {
        return res.status(404).json([{ msg: "User not exists" }]);
      }

      const newNote = new Note({
        user: user_id,
        content,
        type,
      });

      const Note = await newNote.save();
      res.json(note);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// mark note as favourite or remove it from fav list

router.put("/favorite/:id", auth, async (req, res) => {
  try {
    let note = await Note.findById(req.params.id);

    if (!note) return res.status(404).json([{ msg: "note not found" }]);

    if (note.user.toString() !== req.user.id) {
      return res.status(401).json([{ msg: "Not authorized" }]);
    }

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { favorite: !note.favorite },
      { new: true }
    );

    res.json(note);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// Delete note

router.delete("/:id", auth, async (req, res) => {
  try {
    let note = await Note.findById(req.params.id);

    if (!note) return res.status(404).json([{ msg: "Message not found" }]);

    if (note.user.toString() !== req.user.id) {
      return res.status(401).json([{ msg: "Not authorized" }]);
    }

    await Note.findByIdAndRemove(req.params.id);

    res.json({ msg: "note removed" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
