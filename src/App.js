import React, { Component } from 'react';
import Calendar from './Components/Calendar/calendar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h2>Calendar</h2>
        <Calendar />
      </div>
    );
  }
}

export default App;
