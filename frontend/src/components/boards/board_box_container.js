import BoardBox from './board_box';
import { connect } from 'react-redux';
import { fetchBoardNotes, updateNote } from '../../actions/note_actions';


const mSTP = state => ({
  notes: state.entities.notes.board
})  

const mDTP = dispatch => ({
  fetchBoardNotes: id => dispatch(fetchBoardNotes(id)),
  updateNote: note => dispatch(updateNote(note))
})

export default connect(mSTP, mDTP)(BoardBox)