import { render, screen, fireEvent } from '@testing-library/react';
import QuestionInput from '../atoms/QuestionInput';

test('renders input and button', () => {
  render(<QuestionInput value="" onChange={() => { }} onSubmit={() => { }} />);
  expect(screen.getByPlaceholderText(/Ask a question/i)).toBeInTheDocument();
  expect(screen.getByText(/Ask/i)).toBeInTheDocument();

});

test('calls onSubmit when button clicked', () => {
  const mockSubmit = jest.fn();
  render(<QuestionInput value="test" onChange={() => { }} onSubmit={mockSubmit} />);
  fireEvent.click(screen.getByText(/Ask/i));
  expect(mockSubmit).toHaveBeenCalled();
});
