const express = require("express");
const router = express.Router();
const passport = require("passport")
const Board = require('../../models/Board');
const User = require('../../models/User')
const validateBoardInput = require("../../validation/boards")

router.get("/test", (req, res) => res.json({ msg: "This is the boards route" }));

router.post('/',
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
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

module.exports = router;
