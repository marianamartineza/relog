import { render, screen, fireEvent } from '@testing-library/react';
import { Relog } from '../src/Relog';

describe('pruebas en <Relog/>', () => {
  const hour = 10;
  const minute = 30;
  const time = 'PM';

  test('debe hacer match con el snapshot', () => {
    const { container } = render(<Relog />);
    expect(container).toMatchSnapshot();
  });

  test('deberia de mostrar la hora enviada con los proptypes', () => {
    render(<Relog hora={hour} min={minute} tiempo={time} />);
    // screen.debug();
    expect(screen.getByTestId('test-hour').innerHTML).toContain(
      `${hour}:${minute} ${time}`
    );
  });

  test('debe de incrementar la hora al hacer clic en el boton hora', () => {
    render(<Relog hora={hour} min={minute} tiempo={time} />);

    fireEvent.click(screen.getByRole('button', { name: 'btn-hora' }));
    // screen.debug();
    expect(screen.getByTestId('test-hour').innerHTML).toContain(
      `${hour + 1}:${minute} ${time}`
    );
  });

  test('debe de incrementar los minutos al hacer clic en el boton de minutos', () => {
    render(<Relog hora={hour} min={minute} tiempo={time} />);
    fireEvent.click(screen.getByRole('button', { name: 'btn-minuto' }));
    // screen.debug();
    expect(screen.getByTestId('test-hour').innerHTML).toContain(
      `${hour}:${minute + 1} ${time}`
    );
  });

  test('debe de reiniciar a 12:0 AM al hacer clic en el boton de reiniciar', () => {
    render(<Relog hora={hour} min={minute} tiempo={time} />);
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
    // screen.debug();
    expect(screen.getByTestId('test-hour').innerHTML).toContain(`12:0 AM`);
  });

  test('si pasa de 59 min debe de aumentar la hora y considerar los minutos 0', () => {
    render(<Relog hora={hour} min={59} tiempo={time} />);
    fireEvent.click(screen.getByRole('button', { name: 'btn-minuto' }));
    // screen.debug();
    expect(screen.getByTestId('test-hour').innerHTML).toContain(
      `${hour + 1}:${0} ${time}`
    );
  });

  test('si son las 11 AM y se hace clic en el boton de la hora debe cambiar a las 12 PM', () => {
    render(<Relog hora={11} min={minute} tiempo={'AM'} />);
    fireEvent.click(screen.getByRole('button', { name: 'btn-hora' }));
    // screen.debug();
    expect(screen.getByTestId('test-hour').innerHTML).toContain(
      `${12}:${minute} ${'PM'}`
    );
  });

  test('si son las 11 PM y se hace clic en el boton de la hora debe cambiar a las 12 AM', () => {
    render(<Relog hora={11} min={minute} tiempo={'PM'} />);
    fireEvent.click(screen.getByRole('button', { name: 'btn-hora' }));
    // screen.debug();
    expect(screen.getByTestId('test-hour').innerHTML).toContain(
      `${12}:${minute} ${'AM'}`
    );
  });

  test('si son las 11:59 PM y se hace clic en el boton de minutos debe cambiar a las 12:00 AM', () => {
    render(<Relog hora={11} min={59} tiempo={'PM'} />);
    fireEvent.click(screen.getByRole('button', { name: 'btn-minuto' }));
    // screen.debug();
    expect(screen.getByTestId('test-hour').innerHTML).toContain(`12:0 AM`);
  });

  test('si son las 11:59 AM y se hace clic en el boton de minutos debe cambiar a las 12:00 PM', () => {
    render(<Relog hora={11} min={59} tiempo={'AM'} />);
    fireEvent.click(screen.getByRole('button', { name: 'btn-minuto' }));
    // screen.debug();
    expect(screen.getByTestId('test-hour').innerHTML).toContain(`12:0 PM`);
  });
});
