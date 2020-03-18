import React from 'react';

class BoardBox extends React.Component {
    render() {
        return (
            <div>
                {this.props.title}
            </div>
        );
    }
}

export default BoardBox;