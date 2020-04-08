import React from 'react';


class NoteConnector extends React.Component {

    constructor(props) {
        super(props);
    }

    buildButtons(notes) {
        let arr = this.props.boardId.split("/")
        console.log(arr)
        return notes.map(note => {
            let notePojo = {
                note1: this.props._id,
                note2: note[0],
                boardId: arr[2]
            };
            return (<button 
                        key={note[0]}
                        onClick={() => this.props.postConnection(notePojo)}
                    >{note[1]}</button>)
        })
    }

    render() {
        return (
            <div>
                <button className='close-x' onClick={this.props.closeModal}><i className="fas fa-times"></i></button>
                <div className='show-title'>{this.props.title}</div>
                <div>{this.buildButtons(this.props.noteList)}</div>
            </div>
        )
    }
}

export default NoteConnector;