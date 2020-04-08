import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';
import NoteConnector from './note_connector';
import { postConnection } from '../../actions/connection_actions';
import { withRouter } from 'react-router'

const mapStateToProps = (state, ownProps) => {
    return {
        title: state.ui.modal.action.title,
        _id: state.ui.modal.action.boardId,
        boardId: ownProps.location.pathname
    }
}

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal()),
    postConnection: (notes) => dispatch(postConnection(notes))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NoteConnector))