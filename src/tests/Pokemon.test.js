import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('test main page', () => {
  test('if pokemon sprite image renders', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const spriteImage = screen.getByRole('img');
    expect(spriteImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(spriteImage).toHaveAttribute('alt', 'Pikachu sprite');
  });

  test('if pokemon type text renders', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const pokeTypeTitle = screen.queryByTestId('pokemon-type');
    expect(pokeTypeTitle).toHaveTextContent(/electric/i);
  });

  test('if pokemon details link renders', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const detailsLink = screen.getByRole('link', { name: 'More details' });
    fireEvent.click(detailsLink);
    const pikachuTitle = screen.getByRole('heading', {
      name: /pikachu details/i, level: 2 });
    expect(pikachuTitle).toBeInTheDocument();
  });

  it('Teste se existe um ícone de estrela nos pokémons favoritados', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const linkToDetails = screen.getByRole('link', { name: /more details/i });
    fireEvent.click(linkToDetails);

    const favoriteButton = screen.getByLabelText(/Pokémon favoritado?/i);
    fireEvent.click(favoriteButton);

    const favoriteImage = screen.getByAltText(/Pikachu is marked as favorite/i);
    expect(favoriteImage).toBeInTheDocument();
    expect(favoriteImage).toHaveAttribute('src', '/star-icon.svg');
  });
});
