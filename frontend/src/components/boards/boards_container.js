import { connect } from 'react-redux';
import { fetchUserBoards } from '../../actions/board_actions';
import Boards from './boards';

const mapStateToProps = (state) => {
    return {
        boards: Object.values(state.entities.boards.all),
        currentUser: state.session.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserBoards: () => dispatch(fetchUserBoards())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Boards);