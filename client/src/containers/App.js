import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import withAuthentication from '../containers/withAuthentication';
import NewHabit from '../components/newhabit/NewHabit';

import './App.css';

class App extends Component {
  render() {
    return (
     
      <Router>

        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" component={withAuthentication(Dashboard)} />
          <Route path="/newhabit" component={NewHabit} />
          <main>
          
          </main >
        </Switch>
      </Router>

      
    );
  }
}

export default App;
