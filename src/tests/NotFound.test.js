import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { NotFound } from '../pages';

describe('test notfound', () => {
  test('notfound image', () => {
    render(<MemoryRouter><NotFound /></MemoryRouter>);
    const notFoundImage = screen.getByAltText(
      /Pikachu crying because the page requested was not found/i,
    );
    expect(notFoundImage).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
    expect(notFoundImage).toHaveAttribute(
      'alt', 'Pikachu crying because the page requested was not found',
    );
  });

  test('notfound text', () => {
    render(<MemoryRouter><NotFound /></MemoryRouter>);
    const notFoundText = screen.getByText('Page requested not found');
    expect(notFoundText).toBeInTheDocument();
  });
});
