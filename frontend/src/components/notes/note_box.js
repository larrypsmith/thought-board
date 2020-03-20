import React from 'react';
import Draggable from 'react-draggable';
import { updateNote } from '../../actions/note_actions';


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
                onDrag={(e, ui) => console.log(ui.x, ui.y)}
            >
                <div className="note">
                    {note.title}
                </div>
            </Draggable>
        );
    }
}

export default NoteBox;