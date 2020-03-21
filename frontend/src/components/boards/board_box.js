import React from 'react';
import { withRouter } from 'react-router-dom'
import NoteBox from '../notes/note_box'
import './board.scss'
import panAndZoomHoc from 'react-pan-and-zoom-hoc';

const InteractiveDiv = panAndZoomHoc('div');

class BoardBox extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            x: 0.5,
            y: 0.5,
            scale: 1
        };
    }

    componentDidMount() {
        const { fetchBoardNotes, match: { params: { id } } } = this.props
        fetchBoardNotes(id)
    }

    handlePanAndZoom(x, y, scale) {
        this.setState({ x, y, scale });
    }

    handlePanMove(x, y) {
        this.setState({ x, y });
    }

    render() {
        const { x, y, scale } = this.state;

        if (!this.props.notes) {
            return null;
        }

        const allNotes = [];
        this.props.notes.map((note, idx) => {
            allNotes.push(<NoteBox
                note={note}
                key={idx}
                updateNote={this.props.updateNote}
            />)
        })
        return (
            <InteractiveDiv
                x={x}
                y={y}
                className="board-main"
                scale={scale}
                scaleFactor={Math.sqrt(2)}
                minScale={1}
                maxScale={2 ** 18}
                onPanAndZoom={(x, y, scale) => this.handlePanAndZoom(x, y, scale)}
                onPanMove={(x, y) => this.handlePanMove(x, y)}
            >
                <div style={{ position: 'absolute', top: `${y * 100}%`, left: `${x * 100}%`, width: 10, height: 10, backgroundColor: 'black' }} />
                {allNotes}
            </InteractiveDiv>
        )
    }
}


export default withRouter(BoardBox);