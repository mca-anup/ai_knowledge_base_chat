import { render, screen } from '@testing-library/react';
import SuggestedAnswerCard from '../molecules/SuggestedAnswerCard';

describe('SuggestedAnswerCard', () => {
  test('renders without crashing', () => {
    render(<SuggestedAnswerCard answer="Test answer" />);
    expect(screen.getByText(/Test answer/i)).toBeInTheDocument();
  });


  test('displays the provided answer text', () => {
    const answerText = "React is a JavaScript library for building UIs.";
    render(<SuggestedAnswerCard answer={answerText} />);
    expect(screen.getByText(answerText)).toBeInTheDocument();
  });


  test('applies the correct class name', () => {
    const { container } = render(<SuggestedAnswerCard answer="Class check" />);
    expect(container.firstChild).toHaveClass('answer-card');
  });
});