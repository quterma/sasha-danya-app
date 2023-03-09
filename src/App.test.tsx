import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello foo', () => {
  render(<App />);
  const text = screen.getByText(/hello foo/i);
  expect(text).toBeInTheDocument();
});
