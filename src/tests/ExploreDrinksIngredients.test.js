import { fireEvent, screen } from '@testing-library/react';
/* import userEvent from '@testing-library/user-event'; */
import React from 'react';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithBrowser from './Helpers/renderWithBrowser';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
const timeDelay = 1000;
const btnCount = 16;

describe('Teste da página inicial de comidas ', () => {
  it('Serão validados os componentes.', async () => {
    await act(async () => {
      renderWithBrowser(<App />).history.push('/explore/drinks/ingredients');
    });
    await act(async () => {
      await delay(timeDelay);
    });
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(btnCount);
    const appleJackBtn = screen.getByText('Applejack');
    expect(appleJackBtn).toBeInTheDocument();
    await act(async () => {
      fireEvent.click(appleJackBtn);
      await delay(timeDelay);
    });
    expect(window.location.pathname).not.toBe('/explore/drinks/ingredients');
  });
});
