import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {differenceInSeconds, parseISO} from 'date-fns';


const TimerBack = (props) => {
    const {title , dateStr}= props;
    const date = parseISO(dateStr);
    const [timeReminder, setTimeReminder] = useState("");
    useEffect(() => {
        const idInterval = setInterval(()=> {
            const now = new Date();
            const secRemainder = differenceInSeconds(date,now);
            setTimeReminder(secRemainder)
        }, 1000)
        return () => {
            clearInterval(idInterval)
        };
    }, []);
    return (
        <div>
            <h2>Timer Back to {title} </h2>
            <h2>{dateStr}</h2>
            <h2>reminder {timeReminder}</h2>
        </div>
    );
};


TimerBack.propTypes = {
title: PropTypes.string,
dateStr: PropTypes.string,
};


export default TimerBack;
