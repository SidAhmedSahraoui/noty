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
      const { title, content, type } = req.body;

      const newNote = new Note({
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
module.exports = router;
