import { render, screen } from '@testing-library/react';
import React from 'react';
import { About } from '../pages';

describe('test about', () => {
  test('if Abouts image renders', () => {
    render(<About />);
    const aboutImage = screen.getByRole('img');
    expect(aboutImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
    expect(aboutImage).toHaveAttribute('alt', 'Pokédex');
  });

  test('if Abouts text renders', () => {
    render(<About />);
    const aboutTitle = screen.getByRole('heading', {
      name: 'About Pokédex',
      level: 2,
    });
    expect(aboutTitle).toBeInTheDocument();
  });
});
