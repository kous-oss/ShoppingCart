import React from 'react';
import './Modal.css';
import ReactDOM  from 'react-dom';

const Backdrop = props => {
    return(
        <div className='backdrop' onClick={props.handleClose}></div>
    )
}

const ModalOverlay = props => {
    return(
        <div className='modal'>
            <div className='content'>
                {props.children}
            </div>
        </div>
    )

}
const Modal = (props) => {
    return (
      <div>
        <>
          {ReactDOM.createPortal(
            <Backdrop handleClose ={props.handleClose}/>,
            document.getElementById("overlays")
          )}
          {ReactDOM.createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,
            document.getElementById("overlays")
          )}
        </>
      </div>
    );
};

export default Modal;