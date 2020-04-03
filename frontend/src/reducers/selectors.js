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

export const connectionsByNotes = (connections, notes) => {
  const noteIds = notes.map(note => note._id);
  return Object
    .values(connections)
    .filter(connection => noteIds.includes(connection.note1) || noteIds.includes(connection.note2))
}

