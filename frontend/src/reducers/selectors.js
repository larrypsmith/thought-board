export const arrayToObject = array => {
  let obj = {};
  array.forEach(el => obj[el._id] = el);
  return obj;
}

export const boardsByOwner = (boards = {}, owner) => {
  debugger
  return (Object
    .values(boards)
    .filter(board => board.owner === owner.id))
}