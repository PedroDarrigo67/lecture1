import React from "react";
import {Modal, Button} from "react-bootstrap";

const ErrorMessageModal = ({ visible, errorMessage, handleClose}) => {
  return (
    <>
      <Modal show={visible} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>{errorMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ErrorMessageModal;