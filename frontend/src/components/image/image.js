import React from 'react';
import ImageItem from './image_item';

class Image extends React.Component {
    componentDidMount() {
        this.props.fetchNoteImage(this.props.post._id);
    }

    render() {
        if (this.props.images.length === 0) {
            return null
        }

        return (
            <div>
                {this.props.images.map((image, i) => (
                    <ImageItem img={image} key={i} />
                ))}
            </div>
        )
    }
}

export default Image;