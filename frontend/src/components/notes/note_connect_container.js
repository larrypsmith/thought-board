import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';
import NoteConnector from './note_connector';


const mapStateToProps = state => {
    return {
        title: state.ui.modal.action.title
    }
}

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteConnector)