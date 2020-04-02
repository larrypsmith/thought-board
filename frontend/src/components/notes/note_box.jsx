import React from 'react';
import Draggable from 'react-draggable';
import './notes.scss'


class NoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.updatePosition = this.updatePosition.bind(this);
        // this.giveImage = this.giveImage.bind(this);
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

    // giveImage(idTag, url) {
    //     // debugger
    //     let imageDiv = document.getElementById(`${idTag}`);
    //     // imageDiv.setAttribute('style', `backgroundImage: url(`${url}`)`)
    //     imageDiv.style.backgroundImage = url;
    // }

    render() {
        const { note } = this.props;
        if (!note) return null;
        let imgDiv;
        if (note.url !== null) {
            imgDiv = <div class='img-div' style={{ backgroundImage: `url(${note.url})` }}></div>
        } else {
            imgDiv = <div></div>
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

                    {/* <div id={note._id}></div> */}
                    {/* {this.giveImage(note._id, note.url)} */}
                    {/* <img src={note.url}></img> */}
                    <div className='note-btns'>
                        <button onClick={() => this.props.openModal('show', note._id, note.title, note.caption, note.url)}>Show</button>
                        <button onClick={() => this.props.openModal('edit', note._id, note.title, note.caption, note.url)}>Edit</button>
                    </div>
                </div>
            </Draggable>
        );
    }
}

export default NoteBox;