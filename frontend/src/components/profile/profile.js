import React from 'react';
import Boards from '../boards/boards';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            boards: []
        };
    }

    componentWillMount() {
        console.log(this.props.currentUser.id);
        this.props.fetchUserBoards(this.props.currentUser.id);
    }

    componentWillReceiveProps(newState) {
        this.setState({ boards: newState.boards });
    }

    render() {
        if (this.state.boards.length === 0) {
            return (<div>No boards yet</div>)
        } else {
            return (
                <div>
                    <div>
                        <h2>Your boards</h2>
                        {this.state.boards.map(board => (
                            <Boards key={board._id} />
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