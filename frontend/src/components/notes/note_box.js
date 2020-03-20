import React from 'react';
import Draggable from 'react-draggable';

class NoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.updatePosition = this.updatePosition.bind(this);
    }

    updatePosition(note, e, { x, y }) {
        this.props.updateNote({
            id: note._id,
            title: note.title,
            caption: note.caption,
            url: note.url,
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
                onStop={(e, ui) => this.updatePosition(note, e, ui)}
            >
                <div className="note">
                    {note.title}
                    <button onClick={() => this.props.openModal('show')}>Show</button>
                </div>
            </Draggable>
        );
    }
}

export default NoteBox;