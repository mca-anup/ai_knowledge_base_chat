import React from 'react';
import Button from './Button';

const QuestionInput = ({ value, onChange, onSubmit }) => (
  <div className="input-group mb-3">
    <input
      type="text"
      className="form-control"
      placeholder="Ask a question..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
    <Button label="Submit" onClick={onSubmit}></Button>
  </div>
);

export default QuestionInput;
