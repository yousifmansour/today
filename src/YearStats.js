import './YearStats.css';
import React from 'react';

const YearStats = ({currentYearStats}) => {
  const {
    seconds,
    minutes,
    hours,
    days,
    months,
    year
  } = currentYearStats;
  return (
    <div className='year-stats-container'>
      <h2>{year}&nbsp;
      </h2>
      <div>
        <h3>
          Seconds: {seconds}</h3>
        <h3>Minutes: {minutes}</h3>
        <h3>Hours: {hours}</h3>
        <h3>Days: {days}</h3>
        <h3>Months: {months}</h3>
      </div>
    </div>
  )
};

export default YearStats;