import BoardDelete from './board_delete';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { closeModal } from '../../actions/modal_actions';
import { deleteBoard } from '../../actions/board_actions';

const mSTP = (state, ownProps) => {
    return {
        boardId: ownProps.location.pathname.split('/')[2]
    }
}

const mDTP = dispatch => ({
    deleteBoard: boardId => dispatch(deleteBoard(boardId)),
    closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mSTP, mDTP)(BoardDelete))