import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  test('renders heading and logos', () => {
    render(<App />);

    // Check heading
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();

    // Check logos
    expect(screen.getByAltText(/Vite logo/i)).toBeInTheDocument();
    expect(screen.getByAltText(/React logo/i)).toBeInTheDocument();
  });

  test('increments counter when button is clicked', () => {
    render(<App />);

    const button = screen.getByRole('button', { name: /count is 0/i });
    expect(button).toBeInTheDocument();

    // Click once
    fireEvent.click(button);
    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument();

    // Click again
    fireEvent.click(screen.getByRole('button', { name: /count is 1/i }));
    expect(screen.getByRole('button', { name: /count is 2/i })).toBeInTheDocument();
  });
});
