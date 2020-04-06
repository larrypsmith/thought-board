import React from 'react';
import { withRouter } from 'react-router-dom'
import NoteBox from '../notes/note_box'
import './board.scss'

class BoardBox extends React.Component {
    constructor(props) {
        super(props);
        this.renderNotes = this.renderNotes.bind(this);
        this.delete = this.delete.bind(this);
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.boardId)
    }

    delete(e) {
        this.props.deleteBoard(this.props.boardId)
            .then(this.props.history.push('/profile'))
    }


    renderNotes() {
        const { notes } = this.props;
        if (!notes || !notes.length) return null;

        return (
            <div className="notes-parent">
                {
                    notes.map((note, idx) => (
                        <NoteBox
                            note={note}
                            key={idx}
                            updateNote={this.props.updateNote}
                            openModal={this.props.openModal}
                        />
                    ))
                }
            </div>
        )
    }

    render() {
        return (
            <div className='board-box-cont'>
                <div className='new-note-btn-div'>
                    <button className='new-note-btn' onClick={() => this.props.openModal('create', this.props.boardId)}>
                        New Note
                    </button>
                </div>
                <div className='delete-board-div'>
                    <button onClick={this.delete}>Delete Board</button>
                </div>
                <div className="board-main">
                    {this.renderNotes()}
                </div>
            </div>
        );
    }
}

export default withRouter(BoardBox);