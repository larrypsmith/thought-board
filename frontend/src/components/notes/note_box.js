import React from 'react';
import Draggable from 'react-draggable';


class NoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xcoord: props.note.xcoord,
            ycoord: props.note.ycoord
        }
        this.updatePosition = this.updatePosition.bind(this);
    }

    updatePosition(e, { x, y }) {
        this.setState({
            xcoord: x,
            ycoord: y
        })
    }

    render() {
        const { note } = this.props;
        if (!note) return null;
        return (
            <Draggable
                bounds="parent"
                defaultPosition={{ x: note.xcoord, y: note.ycoord }}
                onStop={this.updatePosition}
            >
                <div className="note">
                    {note.title}
                    <br/>
                    x: {note.xcoord}
                    <br/>
                    y: {note.ycoord}
                </div>
            </Draggable>
        );
    }
}

export default NoteBox;