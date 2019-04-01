import React, { Component } from 'react';
import './App.css';

import userIcon from './images/user-icon.svg';

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1>Habit Tracker</h1>
        </header>

        <header className="headerLogin">
          <h1>Habit Tracker</h1>
          <div className="user">
            <p>Hello, <img src={userIcon} alt="user icon"/></p>
            <p>User Name</p>
          </div>
        </header>
        </div>
    );
  }
}

export default App;
