import React from 'react';
import './LeftThisDay.css';

const LeftThisDay = ({leftThisDay}) => {
  const {seconds, minutes, hours} = leftThisDay;
  const totalHours = 24;
  const totalMinutes = totalHours * 60;
  const totalSeconds = totalMinutes * 60;

  return (
    <div className="left-this-day-container">
      <h1>
        Time Left Today
      </h1>
      <h3>Seconds: {seconds}/{totalSeconds}</h3>
      <h3>Minutes: {minutes}/{totalMinutes}</h3>
      <h3>Hours: {hours}/{totalHours}</h3>
    </div>
  );
};

export default LeftThisDay;