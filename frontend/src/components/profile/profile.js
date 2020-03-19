import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            boards: []
        };
    }

    componentDidMount() {
        console.log(this.props.currentUser.id);
        this.props.fetchUserBoards(this.props.currentUser.id);
    }

    componentWillReceiveProps(newState) {
        this.setState({ boards: newState.boards });
    }

    render() {
        if (this.state.boards.length === 0) {
            return (
                <div>
                    <div>No boards yet</div>
                    <div>
                        <Link to={"/new_board"}>Build a Board</Link>
                    </div >
                </div>
            )
        } else {
            return (
                <div>
                    <div>
                        <h2>Your boards</h2>
                        {this.state.boards.map(board => (
                            <Link to={`/boards/${board.id}`}>{board.title}</Link>
                        ))}
                    </div>
                    <div>
                        <Link to={"/new_board"}>Build a Board</Link>
                    </div>
                </div>
            );
        }
    }
}

export default Profile;