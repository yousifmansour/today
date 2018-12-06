import './TodayStats.css';
import React from 'react';

class TodayStats extends React.Component {
  render() {
    return (
      <div className="today-stats-container">
        <h3>Days past this year: X</h3>
        <h3>Hours past this year: X</h3>
        <h3>Days past this year: X</h3>
        <h3>Hours past this year: X</h3>
        <h3>Minutes past this year: X</h3>
        <h3>Seconds past this year: X</h3>

        <h3>Days left this year: X</h3>
        <h3>Hours left this year: X</h3>
        <h3>Days left this year: X</h3>
        <h3>Hours left this year: X</h3>
        <h3>Minutes left this year: X</h3>
        <h3>Seconds left this year: X</h3>
      </div>
    );
  }
}

export default TodayStats;