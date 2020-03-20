import React from 'react';
import './board.scss'

class BoardBox extends React.Component {
    render() {
        return (
            <div className='board-main'>
                {this.props.title}
            </div>
        );
    }
}

export default BoardBox;