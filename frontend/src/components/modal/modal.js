import React from 'react';
import {closeModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';
import NoteComposeContainer from '../notes/note_compose_container';
import NoteEditFormContainer from '../notes/note_edit_form_container';
import './modal.scss';

function Modal({modal, closeModal}) {
    if (!modal) {
        return null;
    }
    
    let showComp = <div>

        <button onClick={closeModal}>Close</button>
        <div>{modal.action.title}</div>
        <div>{modal.action.caption}</div>

        <div>{modal.action.url}</div>
    </div>

    let component;
    switch (modal.action.modal) {
        case 'create':
            component = <NoteComposeContainer />;
            break;
        case 'show':
            component = showComp;
            break;
        case 'edit':
            component = <NoteEditFormContainer />;
            break;
        default:
            return null;
    }

    return (
        <div className='modal-background'>
            <div className='modal-child'>
                {component}
            </div>
        </div>
    )
}

const mSTP = state => {
    return (
        {modal: state.ui.modal}
    )
}

const mDTP = dispatch => {
    return (
        {
            closeModal: () => dispatch(closeModal())
        }
    )
}

export default connect(mSTP, mDTP)(Modal);

