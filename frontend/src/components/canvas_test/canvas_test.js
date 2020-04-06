import React from 'react';
import './canvas_test.scss'

export default class CanvasTest extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.board = {
      width: 500,
      height: 500
    };
    this.state = {
      box1Pos: this.randomPosition(),
      box2Pos: this.randomPosition()
    }
    this.draw = this.draw.bind(this);
    this.getContext = this.getContext.bind(this);
    this.randomPosition = this.randomPosition.bind(this);
  }

  componentDidMount() {
    const { width, height } = this.board;
    this.c = this.getContext();
    this.draw();
    this.c.strokeStyle = "blue";
    this.c.lineWidth = 1;
    this.c.strokeRect(0, 0, width, height);
  }

  componentDidUpdate() {
  }

  getContext() {
    const canvas = this.canvasRef.current
    return canvas.getContext("2d");
  }

  draw() {
    const { box1Pos: { x: x1, y: y1 },
            box2Pos: { x: x2, y: y2 }
          } = this.state;
    this.c.lineWidth = 1;
    this.c.strokeStyle = "red";
    this.c.beginPath();
    this.c.moveTo(x1, y1);
    this.c.lineTo(x2, y2);
    this.c.closePath();
    this.c.stroke();
  }

  randomPosition() {
    const { width, height } = this.board;
    return {
      x: Math.random() * width,
      y: Math.random() * height
    }
  }

  getPosition() {
    
  }

  render() {
    return (
      <div className="canvas-test-parent">
        <canvas
          ref={this.canvasRef}
          width="500"
          height="500"
        ></canvas>

        <div className="hello">
          HELLO
        </div>
        <div className="hello">
          HELLO
        </div>
      </div>
    )
  }
}