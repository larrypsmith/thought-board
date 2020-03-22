import { connect } from 'react-redux';
import { uploadImage, fetchImage } from '../../actions/image_actions';
import ImageUpload from './image_upload';

const mapDispatchToProps = dispatch => {
    return {
        fetchImage: (imageId) => dispatch(fetchImage(imageId)),
        uploadImage: (image) => dispatch(uploadImage(image))
    }
};

export default connect(null, mapDispatchToProps)(ImageUpload)