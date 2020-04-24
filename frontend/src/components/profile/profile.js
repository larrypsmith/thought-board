import React from 'react';
import { Link } from 'react-router-dom';
import './profile.scss'
import Footer from '../../components/footer/footer';

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
                    <div className='prof-conts'>
                        <div>
                            <div className='prof-head'>No boards yet</div>
                            <div className='prof-board-links'>
                                <Link className='new-board' to={"/new_board"}>Build a Board</Link>
                            </div >
                        </div>
                    </div>
                    <Footer />
                </div>
            )
        } else {
            return (
                <div className='prof-div'>
                    <div className='prof-conts'>
                        <div>
                            <div className='prof-head'>Your Boards</div>
                            <div className='prof-board-links'>
                                <Link className='new-board' to={"/new_board"}>Build a Board!</Link>
                                {this.props.boards.map(board => (
                                <Link className='prof-board-link' to={`/boards/${board._id}`} key={board._id}>
                                    {board.title}
                                </Link>
                                ))}
                            </div>
                        </div>
                        {/* <div>
                            <Link className='new-board' to={"/new_board"}>Build a Board</Link>
                        </div> */}
                        <Footer />
                    </div>
                </div>
            );
        }
    }
}

export default Profile;