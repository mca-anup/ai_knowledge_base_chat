import React from 'react';
import { Modal } from 'react-bootstrap';
import Button from '../atoms/Button';

const FAQDetailModal = ({ faq, onClose }) => (
  <Modal show={true} onHide={onClose} centered>
    <Modal.Header closeButton>
      <Modal.Title>{faq.question}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>{faq.answer}</p>
    </Modal.Body>
    <Modal.Footer>
      <Button label="Close" variant="secondary" onClick={onClose}></Button>
    </Modal.Footer>
  </Modal>
);

export default FAQDetailModal;
