import PropTypes from 'prop-types';
import {useState} from 'react';

export const Relog = ({hora,min,tiempo}) => {

    const [minute, setMinute] = useState(min);
    const [hour, setHour] = useState(hora);
    const [time, setTime] = useState(tiempo);

    const AddHour = () => {
        if(hour<12){
            setHour(hour+1);
        }else{
            setHour(1);
            Evaluar(time);
        }
    }

    const AddMinute = () => {
        if(minute<60){
            setMinute(minute+1)
        }else{
            setMinute(min);
            AddHour();
        }
    }

    const Evaluar = (time) => {
        if(time == 'AM'){
            setTime('PM');
        }else if(time == 'PM'){
            setTime('AM');
        }
    }

    const reset = () => {
        setHour(12);
        setMinute(min);
        setTime(tiempo);
    }

    return(
        <>
        <p>{hour}:{minute} {time}</p>
        <button onClick={AddHour}>Hora</button>
        <button onClick={AddMinute}>Minutos</button>
        <button onClick={reset}>Reiniciar</button>
        </>
    );

}

Relog.propTypes = {
    hora: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    tiempo: PropTypes.string.isRequired,
}

Relog.defaultProps = {
    hora:12,
    min:0,
    tiempo:'AM'
}


