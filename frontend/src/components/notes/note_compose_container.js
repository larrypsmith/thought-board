import { connect } from 'react-redux';
import { makeNote, clearErrors } from '../../actions/note_actions';
import NoteCompose from './note_compose';
import { closeModal, openModal } from '../../actions/modal_actions';
import { uploadImage } from '../../actions/image_actions';

const mapStateToProps = (state) => {
    debugger
    return {
        currentUser: state.session.user,
        newNote: state.entities.notes.new,
        errors: state.errors.note
    };
};

const mapDispatchToProps = dispatch => {
    return {
        makeNote: data => dispatch(makeNote(data)),
        closeModal: () => dispatch(closeModal()),
        openModal: (modal, boardId) => dispatch(openModal(modal, boardId)),
        uploadImage: (data) => dispatch(uploadImage(data)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteCompose)