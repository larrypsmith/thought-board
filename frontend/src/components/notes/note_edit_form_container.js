import { connect } from 'react-redux';
import { updateNote, fetchNote, eraseNote } from '../../actions/note_actions';
import NoteEditForm from './note_edit_form';

const mapStateToProps = (state, ownProps) => ({
    note: state.entities.cards[ownProps.match.params.noteId]
});

const mapDispatchToProps = dispatch => ({
    fetchNote: noteId => dispatch(fetchNote(noteId)),
    updateNote: data => dispatch(updateNote(data)),
    eraseNote: noteId => dispatch(eraseNote(noteId))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteEditForm);