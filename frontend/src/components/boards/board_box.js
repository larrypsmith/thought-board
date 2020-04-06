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
                <div className='board-buttons-div'>
                    <button className='new-note-btn' onClick={() => this.props.openModal('create', this.props.boardId)}>
                        New Note
                    </button>
                    <div>
                        <button className='delete-board-btn' onClick={this.delete}>
                            Delete Board
                        </button>
                    </div>
                    <div className='delete-warning'>
                        <p>Are you sure you want to do this? This is final and will result in the loss of all notes!</p>
                    </div>
                </div>
                <div className="board-main">
                    {this.renderNotes()}
                </div>
            </div>
        );
    }
}

export default withRouter(BoardBox);