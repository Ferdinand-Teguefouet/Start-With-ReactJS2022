import React from 'react';


//Styles
import { ModalStyled } from './Modal.styled';

// Redux
import {useDispatch} from 'react-redux';
import {removeModal} from 'store/modal.slice';

function Modal({id, headerContent, bodyContent}) {
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            {
                <ModalStyled>
                <div className="overlay" onClick={() => dispatch(removeModal(id))}/>
                <div className="container">
                    <div className="header">{headerContent}</div>
                    <div className="body">{bodyContent}</div>
                </div>
                </ModalStyled>
            }
            
        </React.Fragment>
    );
}

export default Modal;