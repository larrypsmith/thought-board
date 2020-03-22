import { connect } from 'react-redux';
import { uploadImage } from '../../actions/image_actions';
import ImageUpload from './image_upload';

const mapDispatchToProps = dispatch => {
    return {
        uploadImage: (image) => dispatch(uploadImage(image))
    }
};

export default connect(null, mapDispatchToProps)(ImageUpload)