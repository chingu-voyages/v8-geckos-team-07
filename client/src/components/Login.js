import React, { Component } from 'react';
import Layout from '../containers/Layout';
import SocialButtonList from './SocialButtonList';
import { auth } from '../firebase';
import Header from '../components/header';

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
      <div>
        <Header />
        <div className="circle">
          <h2>Text?</h2>
          <p>paragraph text?</p>
          <SocialButtonList buttonList={buttonList} auth={auth.getAuth}/>
        </div>
      </div>
    );
  }
}

export default Login;