const express = require("express");
const router = express.Router();
const passport = require("passport")
const Connection = require('../../models/Connection');

router.post('/',
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const newConnection = new Connection({
            note1: req.body.noteid1,
            note2: req.body.noteid2,
        })

        newConnection
            .save()
            .then(connection => res.json(connection))
            .catch(err => res.json(err))
    }
)

router.delete('/',
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Connection.findByIdAndDelete(req.body._id)
            .then(connection => res.json(connection))
            .catch(err => res.json(err))
    }
)

router.get('/board/:boardId',
    (req, res) => {
        Connection.find({ board: req.params.boardId })
            .then(connections => res.json(connections))
            .catch(err => res.json(err))
    }
)

module.exports = router;