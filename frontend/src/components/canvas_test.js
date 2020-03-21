import React from 'react';

export default class CanvasTest extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 200, 200);
  }

  render() {
    return (
      <canvas ref={this.canvasRef}/>
    )
  }
}