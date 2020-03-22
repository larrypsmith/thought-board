import React from 'react';
import Draggable from 'react-draggable';

import './canvas_test.scss'

export default class CanvasTest extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.box1Ref = React.createRef();
    this.box2Ref = React.createRef();
    this.handleDrag = this.handleDrag.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.state = {
      startX: null,
      startY: null,
      endX: null,
      endY: null
    }
  }

  componentDidMount() {
    this.setState({
      startX: this.box1Ref.current.offsetLeft,
      startY: this.box1Ref.current.offsetTop,
      endX: this.box2Ref.current.offsetLeft,
      endY: this.box2Ref.current.offsetTop
    })
    const { startX, startY, endX, endY } = this.state;
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.closePath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'red';
    ctx.stroke();
  }

  componentDidUpdate() {
  }

  handleDrag(e, ui) {
    const { offsetLeft, offsetHeight } = e.target
    this.setState
  }

  handleStop(e, ui) {
    
  }

  render() {
    return (
      <div className="canvas-test-parent">
        <canvas ref={this.canvasRef}/>

        <Draggable
          bounds="parent"
          onDrag={this.handleDrag}
          // onStop={this.handleStop}
          // defaultPosition={{x: 50, y: 200}}
        >
          <div ref={this.box1Ref}>
            DRAG ME
          </div>
        </Draggable>
        <Draggable
          bounds="parent"
          onDrag={this.handleDrag}
          // defaultPosition={{x: 200, y:200}}
        >
          <div ref={this.box2Ref}>
            DRAG ME
          </div>
        </Draggable>
      </div>
    )
  }
}