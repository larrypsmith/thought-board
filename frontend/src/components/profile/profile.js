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
        this.props.fetchUserBoards(this.props.currentUser.id)
    }

    render() {
        if (!this.props.boards) {
            return null
        } else if (this.props.boards.length === 0) {
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
                        {this.props.boards.map(board => (
                            <Link to={`/boards/${board._id}`} key={board._id}>
                                {board.title}
                            </Link>
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