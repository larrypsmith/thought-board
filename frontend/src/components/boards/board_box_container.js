import BoardBox from './board_box';
import { connect } from 'react-redux';
import { fetchBoardNotes, updateNote } from '../../actions/note_actions';
import { notesByBoardId } from '../../reducers/selectors';
import { openModal } from '../../actions/modal_actions';


const mSTP = (state, ownProps) => {
  const notes = notesByBoardId(state.entities.notes, ownProps.match.params.id);
  return {
    notes
  }
}

const mDTP = dispatch => ({
  fetchBoardNotes: id => dispatch(fetchBoardNotes(id)),
  updateNote: note => dispatch(updateNote(note)),
  openModal: modal => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(BoardBox)