// const getConnectionCoordinates = connection => {
//   connection.notes.forEach(note)
// }

export const getLineEndpoints = (notes, connections) => {
  const endpoints = [];

  Object.values(connections).forEach(connection => {
    const note1Id = connection.notes[0];
    const note2Id = connection.notes[1];
    const note1 = notes[note1Id];
    const note2 = notes[note2Id];
    const { xcoord: x1, ycoord: y1 } = note1;
    const { xcoord: x2, ycoord: y2 } = note2;
    endpoints.push({ x1, y1, x2, y2 });
  })

  return endpoints;
}