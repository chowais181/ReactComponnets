import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children} in the overlay</div>
    </div>
  );
};
// Get the modal placeholder div from index.html
const modalPlaceholderElement = document.getElementById("modal-placeholder");
const Modal = (props) => {
  return (
    <Fragment>
      {/* Use createPortal to render the child at the placeholder */}
      {ReactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        modalPlaceholderElement
      )}
      {/* Use createPortal to render the child at the placeholder */}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        modalPlaceholderElement
      )}
    </Fragment>
  );
};

export default Modal;
