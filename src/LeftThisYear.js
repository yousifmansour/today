import './LeftThisYear.css';
import React from 'react';

const LeftThisYear = ({leftThisYear, currentYearTotal}) => {
  const {seconds, minutes, hours, days, months} = leftThisYear;
  const {
    year,
    totalSeconds,
    totalMinutes,
    totalHours,
    totalDays,
    totalMonths
  } = currentYearTotal;
  return (
    <div className="left-this-year-container">
      <h1>
        Time Left In {year}
      </h1>
      <h3>Seconds: {seconds}/{totalSeconds}</h3>
      <h3>Minutes: {minutes}/{totalMinutes}</h3>
      <h3>Hours: {hours}/{totalHours}</h3>
      <h3>Days: {days}/{totalDays}</h3>
      <h3>Months: {months}/{totalMonths}</h3>
    </div>
  );
}

export default LeftThisYear;