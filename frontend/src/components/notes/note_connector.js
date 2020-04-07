import React from 'react';

class NoteConnector extends React.Component {

    constructor(props) {
        super(props);
    }

    buildButtons(notes) {
        return notes.map(note => {
            return (<button key={note[0]}>{note[1]}</button>)
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