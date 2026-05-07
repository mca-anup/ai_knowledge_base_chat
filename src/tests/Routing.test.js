import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from '../routes/AppRouter';

test('renders FAQ page route', () => {

  render(
    <MemoryRouter initialEntries={['/faq']}>
      <AppRouter />
    </MemoryRouter>
  );
  expect(screen.getByText(/FAQ/i)).toBeInTheDocument();
});