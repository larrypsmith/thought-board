import React from 'react';
import { withRouter } from 'react-router-dom'
import NoteBox from '../notes/note_box'
import './board.scss'


class BoardBox extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { fetchBoardNotes, match: { params: { id } } } = this.props
        fetchBoardNotes(id)
        this.props.fetchBoard(this.props.boardId)
    }

    render() {
        const { notes } = this.props;
        if (!notes || !notes.length) return null;
        return (
            <div>
                <div><button onClick={() => this.props.openModal('create')}>New Note</button></div>
                <div className="board-main">
                    
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
            </div>
        );
    }
}

export default withRouter(BoardBox);