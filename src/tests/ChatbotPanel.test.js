import { render, screen, fireEvent } from '@testing-library/react';
import ChatbotPanel from '../organisms/ChatbotPanel';
import * as aiService from '../services/aiService';

test('displays AI response after asking a question', async () => {
  jest.spyOn(aiService, 'getAIResponse').mockResolvedValue("Mocked AI Answer");

  render(<ChatbotPanel />);
  fireEvent.change(screen.getByPlaceholderText(/Ask a question/i), { target: { value: "What is React?" } });
  fireEvent.click(screen.getByText(/Ask/i));

  const answer = await screen.findByText(/Mocked AI Answer/i);
  expect(answer).toBeInTheDocument();

});