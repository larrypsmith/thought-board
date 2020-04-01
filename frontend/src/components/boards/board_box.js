import React from 'react';
import { withRouter } from 'react-router-dom'
import NoteBox from '../notes/note_box'
import Canvas from '../canvas/canvas';
import './board.scss'

class BoardBox extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.renderNotes = this.renderNotes.bind(this);
        this.renderCanvas = this.renderCanvas.bind(this);
        this.drawStrings = this.drawStrings.bind(this);
        this.drawStringBetween = this.drawStringBetween.bind(this);
    }

    componentDidMount() {
        const { fetchBoardNotes, match: { params: { id } } } = this.props
        fetchBoardNotes(id);
    }

    componentDidUpdate() {
        this.drawStrings();
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

    drawStrings() {
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        const { notes } = this.props;
        if (!notes || !notes.length) return null;
        for (let i = 0; i < notes.length - 1; i++) {
            for (let j = i + 1; j < notes.length; j++) {
                this.drawStringBetween(notes[i], notes[j], ctx);
            }
        }
    }

    drawStringBetween(note1, note2, c) {
        const { xcoord: x1, ycoord: y1 } = note1;
        const { xcoord: x2, ycoord: y2 } = note2;
        c.lineWidth = 1;
        c.strokeStyle = 'red';
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x2, y2);
        c.closePath();
        c.stroke();
    }

    renderCanvas() {
        return (
            <canvas
                id="canvas"
                ref={this.canvasRef}
                width={window.innerWidth}
                height={window.innerHeight}
            ></canvas>
        )
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={() => this.props.openModal('create')}>
                        New Note
                    </button>
                </div>

                <div className="board-main">
                    {this.renderCanvas()}
                    {this.renderNotes()};
                </div>
            </div>
        );
    }
}

export default withRouter(BoardBox);