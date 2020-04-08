import React from 'react';
import './board.scss'
import Footer from '../../components/footer/footer'
class BoardBuild extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            newBoard: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ newBoard: nextProps.newBoard });
    }

    handleSubmit(e) {
        e.preventDefault();

        let board = {
            title: this.state.title
        };

        this.props.buildBoard(board)
            .then( res => 
                this.props.history.push(`/boards/${res.board.data._id}`)
            )
    }

    update() {
        return e => this.setState({ title: e.currentTarget.value });
    }

    render() {
        return (
            <div className="board-build-div">
                <div className='board-build-conts'>
                    <h1 className="prof-head board-build-header">Create a new Board</h1>
                    <div className="build-form board-build-form">
                        <form onSubmit={this.handleSubmit}>
                            <input type='text'
                                value={this.state.title}
                                onChange={this.update()}
                                placeholder="New board title"
                            />
                            <input className='new-board-btn' type='submit' value="Create" />
                        </form>
                    </div>

                </div>
                <Footer />
            </div>
        )
    }
}

export default BoardBuild;