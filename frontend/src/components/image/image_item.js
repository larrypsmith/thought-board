import React from 'react';

const ImageItem = ({img}) => {
    return (
        <div>
            <img src={img.src} alt={img.flieName} />
        </div>
    )
};

export default ImageItem;