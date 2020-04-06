import React from 'react';
import { connect } from 'react-redux';

import Canvas from './canvas';

class CanvasContainer extends React.Component {
  constructor(props) {
    debugger
    //props: notes, connections
    super(props);
    this.canvasRef = React.createRef();
    this.getLines = this.getLines.bind(this);
  }

  componentDidMount() {
    this.lines = this.getLines();
    debugger
  }

  componentDidUpdate() {
    this.lines = this.getLines();
    debugger;
  }

  getLines() {
    const { notes, connections } = this.props;
    debugger
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

  render() {
    debugger
    if (!this.lines || !this.lines.length) return null;
    return (
      <Canvas
        width={window.innerWidth}
        height={window.innerHeight}
        lines={this.lines} />
    )
  }

}

const mSTP = (state, ownProps) => ({
  connections: ownProps.connections,
  notes: state.entities.notes
})

export default connect(mSTP)(CanvasContainer);