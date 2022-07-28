import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './button.component';

test('renders Button Component with text', () => {
  render(<Button>Test</Button>);
  const linkElement = screen.getByText(/Test/i);
  expect(linkElement).toBeInTheDocument();
});
