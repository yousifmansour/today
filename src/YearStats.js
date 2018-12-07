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
      <h2>THE YEAR {year}
        &nbsp;HAS:
      </h2>
      <div>
        <h3>
          {seconds}: seconds</h3>
        <h3>{minutes}
          : minutes</h3>
        <h3>{hours}
          : hours</h3>
        <h3>{days}
          : days</h3>
        <h3>{months}
          : months</h3>
      </div>
    </div>
  )
};

export default YearStats;