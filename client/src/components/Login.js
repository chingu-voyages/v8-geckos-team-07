import React, { Component } from 'react';
import Layout from '../containers/Layout';
import SocialButtonList from './SocialButtonList';
import { auth } from '../firebase';
import Header from '../components/header';
import Footer from '../components/footer';

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
            <h2>A simple way to measure whether you did a habit.</h2>
            <ol>
              <li>Sign-in using Google</li>
              <li>Create a habit to track</li>
              <li>Check-in to reflect and log your&nbsp;progress</li>
              <li>Review your data to help along your journey</li>
            </ol>

            <p>Happy Tracking!</p>

          <SocialButtonList buttonList={buttonList} auth={auth.getAuth}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;