import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './card.component';

test('renders Card Component with one paragraph', () => {
  render(<Card primaryContent="one paragraph" />);
  const linkElement = screen.getByText(/one paragraph/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Card Component with tow paragraph', () => {
  render(<Card primaryContent="one paragraph" secondaryContent="two paragraph" />);
  const linkElement1 = screen.getByText(/one paragraph/i);
  const linkElement2 = screen.getByText(/two paragraph/i);

  expect(linkElement1).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
});
