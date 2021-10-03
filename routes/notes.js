const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Note = require("../models/Note");

// get all notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find().sort({
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
  [check("content", "Note content is required").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    try {
      const { fav, title, content, type } = req.body;

      const newNote = new Note({
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
/*
router.put("/fav/:id", auth, async (req, res) => {
  try {
    let message = await Message.findById(req.params.id);

    if (!message) return res.status(404).json([{ msg: "Message not found" }]);

    // Make sure user owns message
    if (message.user.toString() !== req.user.id) {
      return res.status(401).json([{ msg: "Not authorized" }]);
    }

    message = await Message.findByIdAndUpdate(
      req.params.id,
      { is_fav: !message.is_fav },
      { new: true }
    );

    res.json(message);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});
*/
