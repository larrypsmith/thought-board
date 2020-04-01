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

module.exports = router;