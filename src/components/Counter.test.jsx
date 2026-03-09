import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  
  test('renders initial count of 0', () => {
    render(<Counter />);
    // Check if 0 is rendered (using exact match for the text node)
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('increments the count when increment button is clicked', () => {
    render(<Counter />);
    const incrementBtn = screen.getByRole('button', { name: /increment/i });
    
    fireEvent.click(incrementBtn);
    
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('decrements the count when decrement button is clicked', () => {
    render(<Counter />);
    const decrementBtn = screen.getByRole('button', { name: /decrement/i });
    
    // Click twice to go to -1 (or once from 0)
    fireEvent.click(decrementBtn);
    
    expect(screen.getByText('-1')).toBeInTheDocument();
  });

  test('resets the count when reset button is clicked', () => {
    render(<Counter />);
    const incrementBtn = screen.getByRole('button', { name: /increment/i });
    const resetBtn = screen.getByRole('button', { name: /reset/i });
    
    // First increment to change state from 0
    fireEvent.click(incrementBtn);
    expect(screen.getByText('1')).toBeInTheDocument();
    
    // Then reset
    fireEvent.click(resetBtn);
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});