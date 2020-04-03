import BoardBox from './board_box';
import { connect } from 'react-redux';
import { updateNote } from '../../actions/note_actions';
import { notesByBoardId } from '../../reducers/selectors';
import { openModal } from '../../actions/modal_actions';
import { fetchBoard } from '../../actions/board_actions';

const mSTP = (state, ownProps) => {
  const notes = notesByBoardId(state.entities.notes, ownProps.match.params.id);
  return {
    notes,
    boardId: ownProps.match.params.id,
    images: state.entities.images
  }
}

const mDTP = dispatch => ({
  fetchBoard: boardId => dispatch(fetchBoard(boardId)),
  updateNote: note => dispatch(updateNote(note)),
  openModal: (modal, boardId, id, title, caption, url) => dispatch(openModal(modal, boardId, id, title, caption, url)),
})

export default connect(mSTP, mDTP)(BoardBox)