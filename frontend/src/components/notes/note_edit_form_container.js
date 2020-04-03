import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';
import { updateNote, fetchNote, eraseNote } from '../../actions/note_actions';
import NoteEditForm from './note_edit_form';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        note: state.entities.notes[state.ui.modal.action.boardId]
    }
};

const mapDispatchToProps = dispatch => ({
    fetchNote: noteId => dispatch(fetchNote(noteId)),
    updateNote: data => dispatch(updateNote(data)),
    eraseNote: noteId => dispatch(eraseNote(noteId)),
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteEditForm);