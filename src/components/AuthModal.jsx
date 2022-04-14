import React from "react";
import SignUp from "./SignUp";
import { Modal } from "react-bootstrap";

function AuthModal({ show, onClose }) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <SignUp closeModal={onClose} />
      </Modal.Body>
    </Modal>
  );
}

export default AuthModal;
