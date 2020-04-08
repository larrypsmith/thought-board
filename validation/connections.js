const Validator = require('validator');

module.exports = function validateConnectionInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.note1)) {
    errors.note1 = 'Note1 cannot be empty';
  }

  if (Validator.isEmpty(data.note2)) {
    errors.note2 = 'Note2 cannot be empty';
  }

  if (Validator.isEmpty(data.boardId)) {
    errors.board = 'Board cannot be empty';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}