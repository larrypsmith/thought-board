import React from 'react';
import NoteBox from './note_box';

class NoteCompose extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            newNote: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({newNote: nextProps.newNote.text});
    }

    handleSubmit(e) {
        e.preventDefault();

        let note = {
            text: this.state.text
        };

        this.props.makeNote(note);
        this.setState({text: ''});
    }

    update() {
        return e => this.setState({ text: e.currentTarget.value });
    }

    render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <input
                  type="textarea"
                  value={this.state.text}
                  onChange={this.update()}
                  placeholder="Write a note..."
                />
                <input type="submit" value="Submit" />
              </div>
            </form>
            <br />
            <NoteBox text={this.state.newNote} />
          </div>
        );
    }
}

export default NoteCompose;