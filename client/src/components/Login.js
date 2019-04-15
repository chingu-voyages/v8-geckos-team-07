import React, { Component } from 'react';

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
<<<<<<< HEAD
      <Layout className='circle'>
        <h2>Start Tracking a Daily Habit</h2>
        <p>Login.js</p>
=======
      <Layout className="circle">
>>>>>>> 6d83fbb9735e241f9ba046252a4d9098a7f288e9
        <SocialButtonList buttonList={buttonList} auth={auth.getAuth}/>
      </Layout>
    );
  }
}

export default Login;
