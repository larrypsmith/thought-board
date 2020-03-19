import React from 'react';
import { withRouter } from 'react-router-dom';
import BoardBox from './board_box';

class Boards extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            boards: []
        };
    }

    componentDidMount() {
        debugger
        console.log(this.props.currentUser.id)
        this.props.fetchUserBoards(this.props.currentUser.id);
    }

    componentWillReceiveProps(newState) {
        this.setState({ boards: newState.boards });
    }

    render() {
        if (this.state.currentUser === undefined) {
            return null
        }
        if (this.state.boards.length === 0) {
            return (<div>There are no Boards</div>)
        } else {
            return (
              <div>
                <h2>Boards</h2>
                {this.state.boards.map(board => (
                    <BoardBox key={board._id} title={board.title} />
                ))}
              </div>
            );
        }
    }
}

export default withRouter(Boards)