const express = require("express");
const router = express.Router();
const passport = require("passport")
const Board = require('../../models/Board');
const Note = require('../../models/Note');
const validateNoteInput = require("../../validation/notes")

router.get("/test", (req, res) => res.json({ msg: "This is the notes route" }));

router.post('/:board_id',
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
            boardId: req.params.board_id,
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

router.get("/:note_id",
  passport.authenticate("jwt", {session: false }),
  (req, res) => {
    Note.findById(req.params.note_id)
      .then(note => res.json(note))
      .catch(err => res.json(err))
})

router.patch("/:note_id",
  passport.authenticate("jwt", {session: false }),
  (req, res) => {
      Note.findByIdAndUpdate(req.params.note_id, {
      title: req.body.title,
      caption: req.body.caption,
      url: req.body.url,
      fileName: req.body.fileName,
      xcoord: req.body.xcoord,
      ycoord: req.body.ycoord
    }, { new: true })
    .then(note => res.json(note))
    .catch(err => res.status(404).json(err))
})

router.get("/board/:board_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Note.find({ boardId: req.params.board_id })
      .then(notes => res.json(notes))
      .catch(err => res.json(err))
})

router.delete("/:note_id", (req, res) => {
  Note.findByIdAndDelete(req.params.note_id)
      .then((note) => res.json(note))
      .catch(err => res.json(err))
})

module.exports = router;