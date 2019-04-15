import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import withAuthentication from '../containers/withAuthentication';
import NewHabit from '../components/NewHabit';
import CheckIn from '../components/check-in';
import NotFound from '../components/not-found';

class App extends Component {
  render() {
    return (
     
      <Router>

        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" component={withAuthentication(Dashboard)} />
          <Route path="/newhabit" component={NewHabit} />
          <Route path="/checkin" component={CheckIn} />
          <Route path="*" component={NotFound} />


          <main>
            <h2>404 Error</h2>
            <p>App.js is the default page.</p>
          </main >
        </Switch>
      </Router>

      
    );
  }
}

export default App;
