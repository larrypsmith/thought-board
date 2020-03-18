import { connect } from 'react-redux';
import { fecthBoardNotes } from '../../actions/note_actions';
import Notes from './notes';

const mapStateToProps = (state) => {
    return {
        notes: Object.values(state.notes.all)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchBoardNotes: (id) => dispatch(fetchBoardNotes(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);