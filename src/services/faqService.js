// Simple local JSON-based FAQ storage
import faqData from '../data/faqData.json';

// Search for a matching FAQ

export const findFAQ = (question) => {
  const lowerQ = question.toLowerCase();
  const match = faqData.find(faq => lowerQ.includes(faq.question.toLowerCase()));
  return match ? match.answer : null;
};

// Add new FAQ entry

export const addFAQ = (question, answer) => {
  faqData.push({ question, answer });
  // In real app, persist to DB or API
  localStorage.setItem('faqData', JSON.stringify(faqData));
};