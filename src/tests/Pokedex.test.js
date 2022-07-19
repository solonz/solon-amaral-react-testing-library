import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('test pokedex', () => {
  test('pokemon type button', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const buttons = 7;
    const typeButton = screen.getAllByTestId('pokemon-type-button');

    expect(typeButton).toHaveLength(buttons);
  });
  test('pokemon all button', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const buttonFire = screen.getByRole('button', { name: /fire/i });
    const charmander = screen.getByTestId(/pokemon-name/i);
    const buttonAll = screen.getByRole('button', { name: /all/i });
    const pikachu = screen.getByTestId(/pokemon-name/i);
    fireEvent.click(buttonFire);
    expect(charmander).toHaveTextContent(/charmander/i);
    fireEvent.click(buttonAll);
    expect(pikachu).toHaveTextContent(/Pikachu/i);
  });
});
