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
    }

    render() {
        const { notes } = this.props;
        if (!notes || !notes.length) return null;
        return (
            <div className="board-main">
                {
                    notes.map((note, idx) => (
                        <NoteBox
                            note={note}
                            key={idx}
                            updateNote={this.props.updateNote}
                        />    
                    ))
                }
            </div>
        );
    }
}

export default withRouter(BoardBox);