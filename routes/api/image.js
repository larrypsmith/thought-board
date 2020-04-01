const express = require('express');
const router = express.Router();
const passport = require('passport');
const Image = require('../../models/Image');
const upload = require('./image_upload_aws');
const singleUpload = upload.single('image');

router.get("/note/:note_id", (req, res) => {
    Image.find({ noteId: req.params.note_id })
        .then(image => res.json(image))
        .catch(err => res.status(400).json(err))
});

router.post('/uploadImage', passport.authenticate('jwt', { session: false }), (req, res) => {
    singleUpload(req, res, function(err) {
        console.log(req)
        if (err) {
            return res.status(422).json({ errors: err.message });
        }
        return res.json({'imageUrl': req.file.location, 'noteId': req.body.noteId, 'fileName': req.file.originalname});
    })
});

router.post('/uploadImageDB', (req, res) => {
    const newImage = new Image ({
        noteId: req.body.data.noteId,
        fileName: req.body.data.fileName,
        imageUrl: req.body.data.imageUrl
    });
    newImage.save()
        .then(image => res.json(image))
})

module.exports = router;