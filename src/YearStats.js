import './YearStats.css';
import React from 'react';

class YearStats extends React.Component {
  render() {
    return (
      <div className='year-stats-container'>
        <h2>THE YEAR 2018 HAS:
        </h2>
          <div>
            <h3>X seconds</h3>
            <h3>X minutes</h3>
            <h3>X hours</h3>
            <h3>X days</h3>
            <h3>X months</h3>
            <h3>X years</h3>
          </div>
      </div>
    );
  }
}

export default YearStats;