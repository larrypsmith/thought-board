import { connect } from 'react-redux';
import { fetchUserBoards } from '../../actions/boards_actions';
import Profile from './profile';

const mapStateToProps = state => {
    return {
        boards: Object.values(state.entities.boards.user),
        currentUser: state.session.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserBoards: id => dispatch(fetchUserBoards(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);