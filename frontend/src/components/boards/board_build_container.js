import { connect } from 'react-redux';
import { buildBoard } from '../../actions/boards_actions';
import BoardBuild from './board_build';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
        newBoard: state.entities.boards.new
    };
};

const mapDispatchToProps = dispatch => {
    return {
        buildBoard: data => dispatch(buildBoard(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardBuild);