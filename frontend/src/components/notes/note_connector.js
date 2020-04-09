import React from 'react';


class NoteConnector extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let arr = this.props.boardId.split("/");
        let theBoardId = arr[2];
        this.props.fetchBoardConnections(theBoardId)
    }

    buildExistingConnList() {
        let connList = Object.values(this.props.connections)
        connList = Object.values(connList);
        let buttons = []
        for (let [key, value] of Object.entries(connList)) {
            let name = this.findNoteName(value.note2)
            if (value.note1 === this.props._id || value.note2 === this.props._id) {
                buttons.push(<button onClick={() => this.props.deleteConnection(value._id)}>{name}</button>)
            }
        }
        return buttons
    }

    findNoteName(noteId) {
        let notes = Object.keys(this.props.notes);
        if (notes.includes(noteId)) {
            return this.props.notes[noteId].title;
        } else {
            return false;
        }
    }

    buildButtons(notes) {
        let arr = this.props.boardId.split("/")
        return notes.map(note => {
            let notePojo = {
                note1: this.props._id,
                note2: note[0],
                boardId: arr[2]
            };
            return (<button 
                        className='notes-to-connect'
                        key={note[0]}
                        onClick={() => this.props.postConnection(notePojo)}
                    >{note[1]}</button>)

        })
    }

    render() {
        return (
            <div className='connections-main'>
                <button className='close-x' onClick={this.props.closeModal}><i className="fas fa-times"></i></button>
                <div className='show-title'>{this.props.title}</div>
                <div className='connections'>
                    <div className='connect-div'>
                        <p className='connect-heading'>Connect a Note</p>
                        <div className='connect-btns-div'>
                            <div className='connect'>{this.buildButtons(this.props.noteList)}</div>
                        </div>
                    </div>
                    <div className='disconnect-div'>
                        <p className='disconnect-heading'>Connected Notes: Click to Disconnect</p>
                        <div className='connect-btns-div'>
                             <div className='connect'>{this.buildExistingConnList()}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NoteConnector;