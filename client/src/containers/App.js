import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import withAuthentication from '../containers/withAuthentication';
import NotFound from '../components/NotFound';

class App extends Component {

  render() {
    return (
     
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route {...this.state} path="/dashboard" component={withAuthentication(Dashboard)} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
      
    );
  }
}

export default App;