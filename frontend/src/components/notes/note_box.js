import React from 'react';
import Draggable from 'react-draggable';
import './notes.scss'


class NoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.updatePosition = this.updatePosition.bind(this);
    }

    updatePosition(note, e, { x, y }) {
        this.props.updateNote({
            _id: note._id,
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
                onDrag={e => e.stopPropagation()}
            >
                <div className="note">
                    {note.title}
                    <br/>
                    <img src={note.url}></img>
                    <button onClick={() => this.props.openModal('show', note._id, note.title, note.caption, note.url)}>Show</button>
                    <button onClick={() => this.props.openModal('edit', note._id, note.title, note.caption, note.url)}>Edit</button>
                </div>
            </Draggable>
        );
    }
}

export default NoteBox;