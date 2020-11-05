import React from "react";
import {Modal, Button} from "react-bootstrap";

const ErrorMessageModal = ({ visible, errorMessage, handleClose}) => {
  return (
    <>
      <Modal show={visible} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color: "black"}}>Error en la lectura de central</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{color: "red"}}>{errorMessage}</Modal.Body>
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