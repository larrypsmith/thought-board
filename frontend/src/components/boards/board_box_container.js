import BoardBox from './board_box';
import { connect } from 'react-redux';
import { updateNote, fetchBoardNotes } from '../../actions/note_actions';
import { notesByBoardId, connectionsByBoardId } from '../../reducers/selectors';
import { openModal } from '../../actions/modal_actions';
import { fetchBoard, deleteBoard } from '../../actions/board_actions';
import { fetchBoardConnections } from '../../actions/connection_actions';

const mSTP = (state, ownProps) => {
  const notes = notesByBoardId(state.entities.notes, ownProps.match.params.id);
  const connections = connectionsByBoardId(state.entities.connections, ownProps.match.params.id);
  return {
    notes,
    boardId: ownProps.match.params.id,
    images: state.entities.images,
    connections
  }
}

const mDTP = dispatch => ({
  fetchBoard: boardId => dispatch(fetchBoard(boardId)),
  fetchBoardNotes: boardId => dispatch(fetchBoardNotes(boardId)),
  fetchBoardConnections: boardId => dispatch(fetchBoardConnections(boardId)),
  updateNote: note => dispatch(updateNote(note)),
  deleteBoard: boardId => dispatch(deleteBoard(boardId)),
  openModal: (modal, boardId, id, title, caption, url) => dispatch(openModal(modal, boardId, id, title, caption, url)),
})

export default connect(mSTP, mDTP)(BoardBox)