import React from 'react';
import AnswerText from '../atoms/AnswerText';

const SuggestedAnswerCard = ({ question, answer }) => (
  <div className="card mb-3 shadow-sm">
    <div className="card-body">
      <h5 className="card-title">{question}</h5>
      <AnswerText text={answer} />
    </div>
  </div>
);

export default SuggestedAnswerCard;
