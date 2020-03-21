import { connect } from 'react-redux';
import Image from './image';
import { fetchNoteImage } from '../../actions/image_actions';

const mapStateToProps = (state) => {
    return {
        images: Object.values(state.entities.image),
        errors: state.errors.image
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchNoteImage: id => dispatch(fetchNoteImage(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Image);