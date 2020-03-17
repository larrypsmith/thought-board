import React from 'react';

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
                    <h2>Your boards</h2>
                    {this.state.boards.map(board => (
                        //need to create board and boardbox containers/componenets
                    ))}
                </div>
            );
        }
    }
}