import './RemainingThisYear.css';
import React from 'react';

const RemainingThisYear = ({leftThisYear}) => {
  const {seconds, minutes, hours, days, months} = leftThisYear;
  return (
    <div className="today-stats-container">
      <h1>
        Remaining This Year
      </h1>
      <h3>Seconds: {seconds}</h3>
      <h3>Minutes: {minutes}</h3>
      <h3>Hours: {hours}</h3>
      <h3>Days: {days}</h3>
      <h3>Months: {months}</h3>
    </div>
  );
}

export default RemainingThisYear;