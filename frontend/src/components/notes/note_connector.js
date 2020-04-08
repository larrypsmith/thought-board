import React from 'react';

class NoteConnector extends React.Component {

    constructor(props) {
        super(props);
    }

    buildButtons(notes) {
        return notes.map(note => {
            return (<button className='notes-to-connect'key={note[0]}>{note[1]}</button>)
        })
    }

    render() {
        return (
            <div className='connections-main'>
                <button className='close-x' onClick={this.props.closeModal}><i className="fas fa-times"></i></button>
                <div className='show-title'>{this.props.title}</div>
                <div className='connections'>
                    <div className='connect-div'>
                        <p className='connect-heading'>Non-connected Notes</p>
                        <div className='connect-btns-div'>
                            <div className='connect'>{this.buildButtons(this.props.noteList)}</div>
                        </div>
                    </div>
                    <div className='disconnect-div'>
                        <p className='disconnect-heading'>Connected Notes: Click to Disconnect</p>
                        This is where the list of connected notes will go. A function to make this list will need to be made. A disconnect button should likely be mapped along side the connected notes titles when the list of connected notes is maped.
                    </div>
                </div>
            </div>
        )
    }
}

export default NoteConnector;