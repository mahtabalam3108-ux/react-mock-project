import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login Component', () => {
  
  test('updates input values on change', () => {
    render(<Login />);

    // 1. Get the Name input (Role 'textbox' works for type="text")
    const nameInput = screen.getByRole('textbox');

    // 2. Get the Password input (Since it has no role, find by name attribute)
    // We use querySelector because your component lacks ARIA labels/placeholders
    const passwordInput = document.querySelector('input[name="password"]');

    // 3. Simulate Typing
    fireEvent.change(nameInput, { target: { name: 'name', value: 'Mehtab' } });
    fireEvent.change(passwordInput, { target: { name: 'password', value: 'password123' } });

    // 4. Assertions
    expect(nameInput.value).toBe('Mehtab');
    expect(passwordInput.value).toBe('password123');
  });

  test('resets form data on submit', () => {
    render(<Login />);

    const nameInput = screen.getByRole('textbox');
    const submitBtn = screen.getByRole('button', { name: /submit/i });

    // 1. Type something first
    fireEvent.change(nameInput, { target: { name: 'name', value: 'Jane' } });
    expect(nameInput.value).toBe('Jane');

    // 2. Submit the form
    fireEvent.click(submitBtn);

    // 3. Verify it reset to empty strings
    expect(nameInput.value).toBe('');
  });
});