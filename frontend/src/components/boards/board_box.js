import React from 'react';
import { withRouter } from 'react-router-dom'
import NoteBox from '../notes/note_box.jsx'
import Canvas from '../canvas/canvas';
import './board.scss'

class BoardBox extends React.Component {
    constructor(props) {
        super(props);
        this.renderNotes = this.renderNotes.bind(this);
        this.delete = this.delete.bind(this);
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.boardId);
        this.props.fetchBoardNotes(this.props.boardId);
        this.props.fetchBoardConnections(this.props.boardId);
    }

    componentDidUpdate() {
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
                            notesList={notes}
                        />
                    ))
                }
            </div>
        )
    }

    renderCanvasContainer() {
        const { notes, connections } = this.props;
        if (!notes || !notes.length ) return null;
        return (
            <Canvas
                connections={connections}
                notes={notes} />
        )
    }

    render() {
        // const { connections, notes } = this.props;
        return (
            <div className='board-box-cont'>
                <div className='board-buttons-div'>
                    <button className='new-note-btn' onClick={() => this.props.openModal('create', this.props.boardId)}>
                        New Note
                    </button>
                    <div className='delete-board-btn-div'>
                        <button className='delete-board-btn' onClick={() => this.props.openModal('delete', this.props.boardId)}>
                            Delete Board
                        </button>
                        <div className='delete-warning'>
                            WARNING! Are you sure you want to do this? This is final and will result in the loss of all notes!
                        </div>
                    </div>
                </div>
                <div className="board-main">
                    {this.renderCanvasContainer()}
                    {this.renderNotes()}
                </div>
            </div>
        );
    }
}

export default withRouter(BoardBox);