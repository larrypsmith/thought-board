import React from 'react';

class BoardDelete extends React.Component {
    constructor(props) {
        super(props)

        this.delete = this.delete.bind(this);
    }

    delete(e) {
        this.props.deleteBoard(this.props.boardId)
            .then(this.props.history.push('/profile'))
        this.props.closeModal()
    }


    render() {

        return (
            <div className="delete-board-div">
                <p>Are you really sure?</p>
                <button onClick={this.delete}>Delete Board</button>
            </div>
        )
    }
}

export default BoardDelete;