const express = require("express");
const router = express.Router();
const passport = require("passport")
const Board = require('../../models/Board');
const Note = require('../../models/Note')
const Connection = require('../../models/Connection')
const validateBoardInput = require("../../validation/boards")

router.get("/test", (req, res) => res.json({ msg: "This is the boards route" }));

router.post('/',
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { isValid, errors } = validateBoardInput(req.body);

    if(!isValid) {
      return res.status(400).json(errors)
    }

    Board.findOne({ title: req.body.title })
      .then(board => {

        if (board) {
          return res.status(400).json({ title: "board title already exists" })
        } else {
          
          const newBoard = new Board({
            owner: req.user.id,
            title: req.body.title,
          })

          newBoard
            .save()
            .then(board => res.json(board))
            .catch(err => res.json(err))
        }
      })
})

router.get("/user/:user_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Board.find({ owner: req.params.user_id })
      .then(boards => res.json(boards))
      .catch(err => res.json(err))
})

router.delete("/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Board.findByIdAndDelete(req.params.id)
      .then(board => res.json(board))
      .catch(err => res.json(err))
})

router.get("/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Board.findById(req.params.id)
      .then(board => {
        const boards = { [board._id]: board };

        Note.find({ boardId: board._id })
          .then(notesArr => {
            let notes = {};
            let connections = {};

            notesArr.forEach(note => {
              notes[note.id] = note

              Connection.find({ $or: [{ note1: note.id }, { note2: note.id }] })
                .then(connects => {
                  connects.forEach(connection => {
                    connections[connection.id] = connection
                  })
                  res.json({ boards, notes, connections });
                })
            })

          })
        })
        .catch(err => res.json(err))
      })
      
      

module.exports = router;
