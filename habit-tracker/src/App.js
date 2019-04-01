import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import HeaderLoggedin from './components/header-logged-in'

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Header></Header>
        <HeaderLoggedin></HeaderLoggedin>
      </div>
    );
  }
}

export default App;
