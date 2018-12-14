import React, {Component} from 'react';
import ThisInstance from './ThisInstance.js';
import YearStats from './YearStats.js'
import RemainingThisYear from './RemainingThisYear.js';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thisInstance: 0,
      currentYearStats: {
        year: 0,
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 0,
        months: 12
      },
      leftThisYear: {
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 0,
        months: 0
      }
    };

    this.update = this
      .update
      .bind(this);

  }

  componentDidMount() {
    this.setup();
    this.update();
    setInterval(() => this.update(), 1000);
  }

  setup() {
    const year = new Date().getFullYear();
    const days = this.leapYear(year)
      ? 366
      : 365;
    const hours = days * 24;
    const minutes = hours * 60;
    const seconds = minutes * 60;
    const currentYearStats = {
      year,
      months: 12,
      days,
      hours,
      minutes,
      seconds
    };
    this.setState({currentYearStats});
  }

  update() {
    const date = new Date();
    const thisInstance = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;
    if (date.getFullYear() !== this.state.currentYearStats.year) 
      this.setState();
    
    // 30 days has september, april, june, and november. all the rest have 31. save
    // february, with 28 days clear, and 29 each leap year

    const months = 11 - date.getMonth();
    let daysInMonth = 0;
    switch (date.getMonth()) {
      case 9:
      case 4:
      case 6:
      case 11:
      case 10:
        daysInMonth = 30;
        break;
      case 2:
        this.leapYear(date.getFullYear())
          ? daysInMonth = 29
          : daysInMonth = 28
        break;
      default:
        return 2;
    }

    const days = daysInMonth - date.getDate();
    const hours = days * 24 - date.getHours();
    const minutes = hours * 60 - date.getMinutes();
    const seconds = minutes * 60 - date.getSeconds();

    this.setState({
      thisInstance,
      leftThisYear: {
        months,
        days,
        hours,
        minutes,
        seconds
      }
    });
  }
  leapYear(year) {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
  }

  render() {
    return (
      <div className="App">
        <ThisInstance thisInstance={this.state.thisInstance}/>
        <RemainingThisYear leftThisYear={this.state.leftThisYear}/>
        <YearStats currentYearStats={this.state.currentYearStats}/> {/* // day stats
        // remaining this day */}
      </div>
    );
  }
}

export default App;
