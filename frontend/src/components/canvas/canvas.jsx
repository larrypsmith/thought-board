import React from 'react';

export default class Canvas extends React.Component {
  constructor(props) {
    // props = lines, width, height
    super(props);
    this.canvasRef = React.createRef();
    this.draw = this.draw.bind(this);
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    this.draw(this.props.lines, ctx);
  }

  componentDidUpdate() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    this.draw(this.props.lines, ctx);
  }

  draw(lines, c) {
    const { width, height } = this.props;
    c.clearRect(0, 0, width, height);
    c.lineWidth = 1;
    c.strokeStyle = "red";
    lines.forEach(line => {
      const { x1, y1, x2, y2 } = line;
      c.beginPath();
      c.moveTo(x1, y1);
      c.lineTo(x2, y2);
      c.closePath();
      c.stroke();
    })
  }

  render() {
    const { width, height } = this.props;
    return <canvas
      id="canvas" 
      ref={this.canvasRef}
      width={width}
      height={height}
    />
  }
}
