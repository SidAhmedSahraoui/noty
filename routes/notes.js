const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

// model
const Note = require("../models/Note");
const User = require("../models/User");

// middleware
const auth = require("../middleware/auth");

// get all notes
router.get("/", auth, async (req, res) => {
  try {
    const notes = await Note.find({ user_id: req.user.id }).sort({
      date: -1,
    });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

// save note
router.post(
  "/",
  [check("user_id", "user_id is required").not().isEmpty()],
  [check("content", "Note content is required").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    try {
      const { user_id, fav, title, content, type } = req.body;
      let user = await User.find({ _id: user_id });

      if (!user || !user.length) {
        return res.status(404).json([{ msg: "User not exists" }]);
      }

      const newNote = new Note({
        user_id,
        fav,
        title,
        content,
        type,
      });

      const note = await newNote.save();
      res.json(note);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  }
);
// make note favorite
router.put("/fav/:id", async (req, res) => {
  try {
    let note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json([{ msg: "not found" }]);
    note = await Note.findByIdAndUpdate(req.params.id, { fav: !note.fav });
    res.json({ msg: "note marked as favorite" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});
module.exports = router;
