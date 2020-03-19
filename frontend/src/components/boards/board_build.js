import React from 'react';

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

        };

        this.props.buildBoard(board)
            // .then((board) => {
            //     this.props.history.push(`/boards/${board.id}`)
            // }
    }

    update() {
        return e => this.setState({ title: e.currentTarget.value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type='text'
                            value={this.state.title}
                            onChange={this.update()}
                            placeholder="Title of New Board"
                        />
                        <input type='submit' value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default BoardBuild;