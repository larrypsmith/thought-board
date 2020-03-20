import { connect } from 'react-redux';
import { makeNote } from '../../actions/note_actions';
import NoteCompose from './note_compose';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.user,
        newNote: state.entities.notes.new,
        boardId: ownProps.match.params.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        makeNote: data => dispatch(makeNote(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteCompose)