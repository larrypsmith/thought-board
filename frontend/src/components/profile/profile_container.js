import { connect } from 'react-redux';
import { fetchUserBoards } from '../../actions/board_actions';
import { boardsByOwner } from '../../reducers/selectors';
import Profile from './profile';

const mapStateToProps = state => {
    const boards = boardsByOwner(state.entities.boards, state.session.user)
    return {
        boards,
        currentUser: state.session.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserBoards: id => dispatch(fetchUserBoards(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);