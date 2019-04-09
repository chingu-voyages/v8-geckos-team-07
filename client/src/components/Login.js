import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../containers/Layout';
import SocialButtonList from './SocialButtonList';
import { auth } from '../firebase';

import GoogleButton from '../images/btn_google_signin_dark_normal_web.png'


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
      <Layout>
        <button><img src={GoogleButton} alt="Sign in using Google"/></button>
        <SocialButtonList buttonList={buttonList} auth={auth.getAuth}/>
      </Layout>
    );
  }
}

export default Login;
