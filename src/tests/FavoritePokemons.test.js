import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { FavoritePokemons } from '../pages';

describe('Test favorite', () => {
  test('link to favorites', () => {
    render(<MemoryRouter><FavoritePokemons /></MemoryRouter>);
    const favoritesText = screen.getByText('No favorite pokemon found');
    expect(favoritesText).toBeInTheDocument();
  });
});
