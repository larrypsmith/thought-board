import React from 'react';
import { withRouter } from 'react-router-dom'
import NoteBox from '../notes/note_box'
import CanvasContainer from '../canvas/canvas_container';
import './board.scss'

class BoardBox extends React.Component {
    constructor(props) {
        super(props);
        this.renderNotes = this.renderNotes.bind(this);
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.boardId)
    }

    componentDidUpdate(...args) {
        // if (prevProps.match.params.id === this.props.
        // this.props.fetchBoard(this.props.boardId)
        console.log(args)
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
                            openModal={this.props.openModal} />
                    ))
                }
            </div>
        )
    }

    render() {
        const { connections } = this.props;
        return (
            <div className='board-box-cont'>
                <div className='new-note-btn-div'>
                    <button className='new-note-btn' onClick={() => this.props.openModal('create', this.props.boardId)}>
                        New Note
                    </button>
                </div>

                <div className="board-main">
                    <CanvasContainer connections={connections} />
                    {this.renderNotes()};
                </div>
            </div>
        );
    }
}

export default withRouter(BoardBox);