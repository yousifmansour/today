import React, {Component} from 'react';
import ThisInstance from './ThisInstance.js';
import YearStats from './YearStats.js'
import TodayStats from './TodayStats.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThisInstance/>
        <YearStats/>
        <TodayStats/>
      </div>
    );
  }
}

export default App;
