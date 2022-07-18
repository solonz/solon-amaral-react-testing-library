import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('test app', () => {
  test('link to home', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const homeLink = screen.getByRole('link', { name: /home/i });

    userEvent.click(homeLink);
    const homeLinkText = screen.getByRole('heading', { level: 2 });
    expect(homeLinkText).toBeInTheDocument();
  });
  test('link to favorites', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const favoritesLink = screen.getByRole('link', { name: /Favorite Pokémons/i });

    userEvent.click(favoritesLink);
    const favoritesLinkText = screen.getByRole('heading', { level: 2 });
    expect(favoritesLinkText).toBeInTheDocument();
  });
  test('link to about', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const aboutLink = screen.getByRole('link', { name: /about/i });

    userEvent.click(aboutLink);
    const aboutLinkText = screen.getByRole('heading', {
      name: /About Pokédex/i, level: 2,
    });
    expect(aboutLinkText).toBeInTheDocument();
  });
});
