const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const keys = require('../../config/keys');
const BUCKET_NAME = 'thought-board-dev';

const s3 = new AWS.S3 ({
        accessKeyId: keys.AWSaccessKeyId,
        secretAccessKey: keys.AWSsecretAccessKey,
        region: 'us-west-1',
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('File type must be a JPEG or PNG'), false);
    }
}

const upload = multer ({
    fileFilter, 
    storage: multerS3 ({
        acl: 'public-read',
        s3,
        bucket: BUCKET_NAME,
        contentType: multerS3.AUTO_CONTENT_TYPE,
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, `${Date.now().toString()}` + '-' + file.originalname);
        }
    })
});

module.exports = upload;