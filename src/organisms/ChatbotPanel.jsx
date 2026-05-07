import React, { useState } from 'react';
import QuestionInput from '../atoms/QuestionInput';
import { getAIResponse } from '../services/aiService';
import { Modal } from 'react-bootstrap';
import Button from '../atoms/Button';

const ChatbotPanel = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async () => {
    const response = await getAIResponse(question);
    setAnswer(response);
    setShowModal(true);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Chat with AI</h2>
      <QuestionInput value={question} onChange={setQuestion} onSubmit={handleSubmit} />

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>AI Response</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{answer}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button label="Close" variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ChatbotPanel;
