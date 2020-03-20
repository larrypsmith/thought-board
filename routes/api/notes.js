const express = require("express");
const router = express.Router();
const passport = require("passport")
const Board = require('../../models/Board');
const Note = require('../../models/Note');
const validateNoteInput = require("../../validation/notes")
const upload = require('./photo_upload_aws');
const singleUpload = upload.single('image');

router.get("/test", (req, res) => res.json({ msg: "This is the notes route" }));

router.post('/:board_id',
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const {isValid, errors} = validateNoteInput(req.body)
    //upload code for image
    singleUpload(req, res, function (err) {
      if (err) {
        return res.status(422).json({ errors: err.message });
      }
      return res.json({ 'imageUrl': req.file.location, 'postId': req.body.postId, 'fileName': req.file.originalname });
    })

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
            //imageSrc: req.body.data.imageUrl add to note schema
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
      xcoord: req.body.xcoord,
      ycoord: req.body.ycoord
    })
    .then(note => res.json(note))
    .catch(err => res.json(err))
})

router.get("/board/:board_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Note.find({ boardId: req.params.board_id })
      .then(notes => res.json(notes))
      .catch(err => res.json(err))
})

router.delete("/:note_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Note.findOneAndDelete({ id: req.params.note_id })
      .then(() => res.json("delete successful"))
      .catch(err => res.json(err))
})

module.exports = router;