import React from 'react';
import NoteBox from './note_box';
import { withRouter } from 'react-router-dom'

class NoteCompose extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            caption: '',
            newNote: '',
            boardId: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({newNote: nextProps.newNote.text});
    }

    handleSubmit(e) {
        e.preventDefault();

        let note = {
            title: this.state.title,
            caption: this.state.caption,
            boardId: this.props.boardId,
            xcoord: 100,
            ycoord: 100
        };

        this.props.makeNote(note)
        .then( () => this.props.closeModal())

    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        return (
          <div>
            <button onClick={this.props.closeModal}>Close</button>
            <form onSubmit={this.handleSubmit}>
              <div>
                <input
                  type="text"
                  value={this.state.title}
                  onChange={this.update('title')}
                  placeholder="Title of note"

                />
                <br />
                <input
                  type="textarea"
                  value={this.state.caption}
                  onChange={this.update('caption')}
                  placeholder="Write a note..."
                />
                <br />
                <input type="submit" value="Submit" />
              </div>
            </form>
            <br />
            <NoteBox text={this.state.newNote} />
          </div>
        );
    }
}

export default withRouter(NoteCompose);