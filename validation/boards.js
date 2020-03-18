const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateBoardInput(data) {
    let errors = {};

    data.title = validText(data.title) ? data.title : '';

    if (!Validator.isLength(data.title, { min: 2, max: 75 })) {
        errors.title = 'Title must be between 2 and 75 characters';
    }

    if (Validator.isEmpty(data.title)) {
        errors.title = 'Title cannot be empty';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};