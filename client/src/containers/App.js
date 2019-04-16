import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import withAuthentication from '../containers/withAuthentication';
import NewHabit from '../components/NewHabit';
import CheckIn from '../components/check-in';
import NotFound from '../components/not-found';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        loggedIn: false
      };
  }    

  render() {
    return (
     
      <Router>

        <Switch>
          <Route path="/" exact component={Login} />
          <Route {...this.state} path="/dashboard" component={withAuthentication(Dashboard)} />
          <Route path="/newhabit" component={NewHabit} />
          <Route path="/checkin" component={CheckIn} />
          <Route path="*" component={NotFound} />


          <main>
          
          </main >
        </Switch>
      </Router>

      
    );
  }
}

export default App;
