import React from 'react';
import { withRouter } from 'react-router-dom';
import NoteBox from './note_box';

class Note extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: []
        };
    }

    componentWillMount() {
        this.props.fetchBoardNotes();
    }

    componentWillReceiveProps(newState) {
        this.setState({ notes: newState.notes });
    }

    render() {
        if (this.state.tweets.length === 0) {
            return (
                <div>
                    <div>You have not made any Notes</div>
                    <Link to='/new_note'>Make a new Note</Link>
                </div>
            )
        } else {
            return (
              <div>
                <h2>Your Notes</h2>
                {this.state.notes.map(note => (
                  <NoteBox key={note._id} text={note.text} />
                ))}
                <Link to="/new_note">Make a new Note</Link>
              </div>
            );
        }
    }
}

export default withRouter(Note);