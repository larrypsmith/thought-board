import React from 'react';
import { Link } from 'react-router-dom';
import './profile.scss'

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
                <div className='prof-div'>
                    <div className='prof-head'>No boards yet</div>
                    <div>
                        <Link className='new-board' to={"/new_board"}>Build a Board</Link>
                    </div >
                </div>
            )
        } else {
            return (
                <div className='prof-div'>
                    <div>
                        <div className='prof-head'>Your boards</div>
                        <div className='prof-board-links'>
                            {this.props.boards.map(board => (
                            <Link className='prof-board-link' to={`/boards/${board._id}`} key={board._id}>
                                {board.title}
                            </Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Link className='new-board' to={"/new_board"}>Build a Board</Link>
                    </div>
                </div>
            );
        }
    }
}

export default Profile;