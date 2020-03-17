const express = require("express");
const router = express.Router();
const User = require('../../models/Board');

router.get("/test", (req, res) => res.json({ msg: "This is the boards route" }));

router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({ email: "A user has already registered with this address" })
      } else {
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        })
      }
    })
})

module.exports = router;