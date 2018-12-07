import './TodayStats.css';
import React from 'react';

const TodayStats = ({leftThisYear}) => {
  const {seconds, minutes, hours, days, months} = leftThisYear;
  return (
    <div className="today-stats-container">
      <h3>Seconds left this year: {seconds}</h3>
      <h3>Minutes left this year: {minutes}</h3>
      <h3>Hours left this year: {hours}</h3>
      <h3>Days left this year: {days}</h3>
      <h3>Months left this year: {months}</h3>
    </div>
  );
}

export default TodayStats;