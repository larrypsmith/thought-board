const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateNoteInput(data) {
    let errors = {};

    data.caption = validText(data.caption) ? data.caption : '';

    if (!Validator.isLength(data.caption, { min: 4 })) {
        errors.caption = 'caption must be at least 4 characters';
    }

    if (Validator.isEmpty(data.caption)) {
        errors.caption = 'caption cannot be empty';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};