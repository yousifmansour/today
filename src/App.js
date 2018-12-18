import React, {Component} from 'react';
import ThisInstance from './ThisInstance.js';
import LeftThisYear from './LeftThisYear.js';
import LeftThisDay from './LeftThisDay.js';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thisInstance: 0,
      currentYearTotal: {
        year: 0,
        totalSeconds: 0,
        totalMinutes: 0,
        totalHours: 0,
        totalDays: 0,
        totalMonths: 12
      },
      leftThisYear: {
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 0,
        months: 0
      },
      leftThisDay: {
        seconds: 0,
        minutes: 0,
        hours: 0
      }
    };
  }

  componentDidMount() {
    this.setup();
    this.updateYear();
    this.updateDay();
    setInterval(() => {
      this.updateYear();
      this.updateDay();
    }, 1000);
  }

  setup() {
    const year = new Date().getFullYear();
    const totalDays = this.leapYear(year)
      ? 366
      : 365;
    const totalHours = totalDays * 24;
    const totalMinutes = totalHours * 60;
    const totalSeconds = totalMinutes * 60;
    const currentYearTotal = {
      year,
      totalMonths: 12,
      totalDays,
      totalHours,
      totalMinutes,
      totalSeconds
    };
    this.setState({currentYearTotal});
  }

  updateYear() {
    // updates year and current instatnce

    const date = new Date();
    const thisInstance = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;
    // if (date.getFullYear() !== this.state.currentYearTotal.year) this.setState();
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

  updateDay() {
    const date = new Date();
    const hours = 24 - date.getHours() - 1;
    const minutes = hours * 60 + (60 - date.getMinutes());
    const seconds = minutes * 60 - date.getSeconds();
    const leftThisDay = {
      hours,
      minutes,
      seconds
    };
    this.setState({leftThisDay});
  }

  render() {
    return (
      <div className="App">
        <ThisInstance thisInstance={this.state.thisInstance}/>
        <LeftThisDay leftThisDay={this.state.leftThisDay}/>
        <LeftThisYear
          leftThisYear={this.state.leftThisYear}
          currentYearTotal={this.state.currentYearTotal}/>
      </div>
    );
  }
}

export default App;
