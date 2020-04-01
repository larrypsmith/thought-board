import React from 'react';
import { withRouter } from 'react-router-dom'
import NoteBox from '../notes/note_box'
import './board.scss'

class BoardBox extends React.Component {
    constructor(props) {
        super(props);
        this.renderNotes = this.renderNotes.bind(this);
    }

    componentDidMount() {
        const { fetchBoardNotes, match: { params: { id } } } = this.props
        fetchBoardNotes(id)
        this.props.fetchBoard(this.props.boardId)
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
                            image={note.image}
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
                    <button className='new-note-btn' onClick={() => this.props.openModal('create')}>
                        New Note
                    </button>
                </div>

                <div className="board-main">
                    {this.renderNotes()};
                </div>
            </div>
        );
    }
}

export default withRouter(BoardBox);