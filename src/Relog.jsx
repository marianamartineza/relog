import PropTypes from 'prop-types';
import { useState } from 'react';

export const Relog = ({ hora, min, tiempo }) => {
  const [minute, setMinute] = useState(min);
  const [hour, setHour] = useState(hora);
  const [time, setTime] = useState(tiempo);

  const AddHour = () => {
    if (hour < 11) {
      setHour(hour + 1);
    } else if (hour == 11) {
      setHour(hour + 1);
      Evaluar(time);
    } else {
      // cuando sean las 12 cambiar a 1
      setHour(1);
    }
  };

  const AddMinute = () => {
    if (minute < 59) {
      setMinute(minute + 1);
    } else {
      setMinute(0);
      AddHour();
    }
  };

  const Evaluar = time => {
    if (time == 'AM') {
      setTime('PM');
    } else if (time == 'PM') {
      setTime('AM');
    }
  };

  const reset = () => {
    setHour(12);
    setMinute(0);
    setTime('AM');
  };

  return (
    <>
      <p data-testid='test-hour'>
        {hour}:{minute} {time}
      </p>
      <button aria-label='btn-hora' onClick={AddHour}>
        Hora
      </button>
      <button aria-label='btn-minuto' onClick={AddMinute}>
        Minutos
      </button>
      <button aria-label='btn-reset' onClick={reset}>
        Reiniciar
      </button>
    </>
  );
};

Relog.propTypes = {
  hora: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  tiempo: PropTypes.string.isRequired,
};

Relog.defaultProps = {
  hora: 12,
  min: 0,
  tiempo: 'AM',
};
