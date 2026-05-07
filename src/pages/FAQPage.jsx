import React, { useEffect, useState } from 'react';
import FAQList from '../organisms/FAQList';
import faqData from '../data/faqData.json';

/* const sampleFaqs = [
  { q: 'How to reset password?', a: 'Go to settings and click reset password.' },
  { q: 'How to contact support?', a: 'Email support@example.com.' },
  { q: 'How to update profile?', a: 'Navigate to your profile page and click edit.' }
]; */

const FAQPage = () => {
  const [sampleFaqs, setFaqs] = useState([]);

  useEffect(() => {
    // Load FAQs from local JSON or localStorage
    const storedFaqs = localStorage.getItem('faqData');
    setFaqs(storedFaqs ? JSON.parse(storedFaqs) : faqData);
  }, []);

  return (
    <div>
      <h1>FAQ Page </h1>
      <FAQList faqs={sampleFaqs} />
    </div>
  );
};

export default FAQPage;
