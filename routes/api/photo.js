const express = require('express');
const router = express.Router();
const passport = require('passport');
const Photo = require('../../models/Photo');
const upload = require('./photo_upload_aws');
const singleUpload = upload.single('photo');

router.get("/note/:note_id", (req, res) => {
    Photo.find({ noteId: req.params.note_id })
        .then(photos => res.json(photos))
        .catch(err => res.status(400).json(err))
});

router.post('/uploadPhoto', passport.authenticate('jwt', { session: false }), (req, res) => {
    singleUpload(req, res, function(err) {
        if (err) {
            return res.status(422).json({ errors: err.message });
        }
        return res.json({'photoUrl': req.file.location, 'noteId': req.body.noteId, 'fileName': req.file.originalname});
    })
});

router.post('/uploadPhotoDB', (req, res) => {
    const newPhoto = new Photo ({
        noteId: req.body.data.noteId,
        fileName: req.body.data.fileName,
        photoUrl: req.body.data.photoUrl
    });
    newPhoto.save()
        .then(photo => res.json(photo))
})