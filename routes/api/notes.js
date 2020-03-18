const express = require("express");
const router = express.Router();
const passport = require("passport")
const Board = require('../../models/Board');
const Note = require('../../models/Note');
const validateNoteInput = require("../../validation/notes")

router.get("/test", (req, res) => res.json({ msg: "This is the notes route" }));

router.post('/',
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const {isValid, errors} = validateNoteInput(req.body)
    if(!isValid) {
      return res.status(400).json(errors)
    }

    Note.findOne({ title: req.body.title })
      .then(note => {
        if (note) {
          return res.status(400).json({ title: "note with that title already exists" })
        } else {
          const newNote = new Note({
            boardId: req.board_id,
            title: req.body.title,
            caption: req.body.caption,
            url: req.body.url,
        })
          newNote
            .save()
            .then(note => res.json(note))
            .catch(err => res.json(err))
        }
      })
})

module.exports = router;