import React from 'react';

class Image extends React.Component {
    render() {
        if (!this.props.image) {
            return null
        }

        return (
            <div>
                {this.props.fetchImage()}
            </div>
        )
    }
}

export default Image;