import React from 'react';
import { arrayToObject } from '../../reducers/selectors'

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.getLines = this.getLines.bind(this);
    this.draw = this.draw.bind(this);
  }

  componentDidMount() {
    this.lines = this.getLines();
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    this.draw(this.lines, ctx);
  }

  componentDidUpdate() {
    this.lines = this.getLines();
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    this.draw(this.lines, ctx);
  }

  getLines() {
    let { notes, connections } = this.props;
    notes = arrayToObject(notes);
    const lines = [];
    connections.forEach(connection => {
      const note1 = notes[connection.note1];
      const note2 = notes[connection.note2];
      const { xcoord: x1, ycoord: y1 } = note1;
      const { xcoord: x2, ycoord: y2 } = note2;
      lines.push({x1, y1, x2, y2});
    })
    return lines;
  }

  draw(lines, c) {
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    c.lineWidth = 1;
    c.strokeStyle = "red";
    lines.forEach(line => {
      const { x1, y1, x2, y2 } = line;
      c.beginPath();
      c.moveTo(x1 + 75, y1 + 75);
      c.lineTo(x2 + 75, y2 + 75);
      c.closePath();
      c.stroke();
    })
  }

  render() {
    return (
      <canvas
        id="canvas"
        ref={this.canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
      />
    )
  }

}