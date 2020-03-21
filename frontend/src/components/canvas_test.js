import React from 'react';

export default class CanvasTest extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    const canvas = this.canvasRef.current;
  }

  render() {
    return (
      <canvas ref={this.canvasRef}/>
    )
  }
}