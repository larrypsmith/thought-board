import { connect } from 'react-redux';
import { makeNote } from '../../actions/note_actions';
import NoteCompose from './note_compose';
import { closeModal, openModal } from '../../actions/modal_actions';
import { uploadImage } from '../../actions/image_actions';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
        newNote: state.entities.notes.new,
        boardId: state.entities.boards
    };
};

const mapDispatchToProps = dispatch => {
    return {
        makeNote: data => dispatch(makeNote(data)),
        closeModal: () => dispatch(closeModal()),
        openModal: () => dispatch(openModal()),
        uploadImage: (data, note) => dispatch(uploadImage(data, note))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteCompose)