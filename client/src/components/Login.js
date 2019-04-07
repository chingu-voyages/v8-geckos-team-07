import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../containers/Layout';
import SocialButtonList from './SocialButtonList';
import { auth } from '../firebase';

const buttonList = {
  google: {
    visible: true,
    provider: () => {
      const provider = auth.googleOAuth();
      provider.addScope('profile');
      provider.addScope('email');
      return provider;
    }
  },
  
};

class Login extends Component {
  componentDidMount() {
    auth.getAuth().onAuthStateChanged(user => {
      if (user) {
        this.props.history.push('/dashboard');
      }
    });
  }

  render() {
    return (
      <Layout contentCenter={true}>
        <p>Connect With</p>
        <SocialButtonList buttonList={buttonList} auth={auth.getAuth} />
        <Link to="/about">About</Link>
      </Layout>
    );
  }
}

export default Login;
