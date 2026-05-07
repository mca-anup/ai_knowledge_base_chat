import { findFAQ, addFAQ } from '../services/faqService';

test('findFAQ returns stored answer', () => {
  const answer = findFAQ("What is React?");
  expect(answer).toBe("React is a JavaScript library for building user interfaces.");

});

test('addFAQ stores new question and answer', () => {
  addFAQ("What is Node.js?", "Node.js is a runtime for JavaScript.");
  const answer = findFAQ("What is Node.js?");
  expect(answer).toBe("Node.js is a runtime for JavaScript.");
});