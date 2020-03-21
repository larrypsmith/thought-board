export const arrayToObject = array => {
  let obj = {};
  array.forEach(el => obj[el._id] = el);
  return obj;
}

export const boardsByOwner = (boards = {}, owner) => {
  return (Object
    .values(boards)
    .filter(board => board.owner === owner.id))
}

export const notesByBoardId = (notes, boardId) => {
  return Object
    .values(notes)
    .filter(note => note.boardId === boardId)
}