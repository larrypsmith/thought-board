import React from 'react';
import {closeModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';
import NoteComposeContainer from '../notes/note_compose_container';
import NoteEditFormContainer from '../notes/note_edit_form_container';
import NoteConnectorContainer from '../notes/note_connect_container';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container'
import BoardDeleteContainer from '../boards/board_delete_container'
import './modal.scss';

function Modal({modal, closeModal}) {
    if (!modal) {
        return null;
    }
    
    let showComp = <div className='show-cont'>
        
        <button className='close-x' onClick={closeModal}><i className="fas fa-times"></i></button>
        <div className='show-title'>{modal.action.title}</div>
        <div className='show-caption'>{modal.action.caption}</div>
        <div className='note-show-image-div' style={{ backgroundImage: `url(${modal.action.url})` }}></div>
        
    </div>

    let component;
    

    switch (modal.action.modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        case 'create':
            component = <NoteComposeContainer boardId={modal.action.boardId} />;
            break;
        case 'show':
            component = showComp;
            break;
        case 'connect':
            component = <NoteConnectorContainer noteList={modal.action.noteList} />;
            break;
        case 'edit':
            component = <NoteEditFormContainer />;
            break;
        case 'delete':
            component = <BoardDeleteContainer />
            break;
        default:
            return null;
    }

    if (modal.action.modal === 'login') {
        return (
            <div className='modal-background'>
                <div className='modal-login'>
                    {component}
                </div>
            </div>
        )
    } else if (modal.action.modal === 'signup') {
        return (
            <div className='modal-background'>
                <div className='modal-signup'>
                    {component}
                </div>
            </div>
        )
    } else if (modal.action.modal === 'create') {
        return (
            <div className='modal-background'>
                <div className='modal-create'>
                    {component}
                </div>
            </div>
        )
    } else if (modal.action.modal === 'delete') {
        return (
            <div className="modal-background">
                <div className="modal-delete">
                    {component}
                </div>
            </div>
        )
    } else {
        return (
            <div className='modal-background'>
                <div className='modal-child'>
                    {component}
                </div>
            </div>
        )
    }
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

