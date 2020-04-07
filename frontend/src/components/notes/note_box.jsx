import React from 'react';
import Draggable from 'react-draggable';
import './notes.scss'


class NoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.updatePosition = this.updatePosition.bind(this);
        this.createNoteList = this.createNoteList.bind(this);
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

    createNoteList(notes) {
        let noteArr = [];
        let notesObjs = Object.values(notes);
        notesObjs.forEach(note => {
            if (this.props.note.title !== note.title) {
                noteArr.push([note._id, note.title]);
            }
        })
        // debugger
        return noteArr;
    }

    render() {
        let noteList = this.createNoteList(this.props.notesList)
        const { note } = this.props;
        if (!note) return null;
        let imgDiv;
        if (note.url !== null) {
            imgDiv = <div className='img-div' style={{ backgroundImage: `url(${note.url})` }}></div>
        } else {
            imgDiv = <div className='no-img-div'>{note.caption}</div>
        }
        return (
            <Draggable
                bounds="parent"
                defaultPosition={{ x: note.xcoord, y: note.ycoord }}
                onStop={(e, ui) => this.updatePosition(note, e, ui)}
                onDrag={e => e.stopPropagation()}
            >
                <div className="note">
                    <p>{note.title}</p>
                    {imgDiv}
                    <div className='note-btns'>
                        <button onClick={() => this.props.openModal('show', note._id, note.title, note.caption, note.url)}>Show</button>
                        <button onClick={() => this.props.openModal('connect', note._id, note.title, note.caption, note.url, noteList)}>Connect</button>
                        <button onClick={() => this.props.openModal('edit', note._id, note.title, note.caption, note.url)}>Edit</button>
                    </div>
                </div>
            </Draggable>
        );
    }
}

export default NoteBox;