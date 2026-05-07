import React, { useState } from 'react';
import SuggestedAnswerCard from '../molecules/SuggestedAnswerCard';
import FAQDetailModal from '../pages/FAQDetailModal';

const FAQList = ({ faqs }) => {
  const [selectedFaq, setSelectedFaq] = useState(null);

  return (
    <div className="container mb-5">
      <h2 className="mb-4">Frequently Asked Questions</h2>
      {faqs.map((faq, idx) => (
        <div key={idx} onClick={() => setSelectedFaq(faq)} style={{ cursor: 'pointer' }}>
          <SuggestedAnswerCard question={faq.question} answer={faq.answer} />
        </div>
      ))}

      {selectedFaq && (
        <FAQDetailModal
          faq={selectedFaq}
          onClose={() => setSelectedFaq(null)}
        />
      )}
    </div>
  );
};

export default FAQList;
