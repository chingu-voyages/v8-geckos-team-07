import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../components/footer'
import HeaderLoggedIn from './HeaderLoggedIn';

const propTypes = {
  children: PropTypes.node.isRequired,
  contentCenter: PropTypes.bool
};

const Layout = ({ children}) => {
  return (
    <section>
      {/* <Header /> or <HeaderLoggedIn /> Need to swap headers based of if user logged in */}
      
      <div id="content-wrap">
        <main>
          {children}
        </main>
      </div>
      
      <Footer />
    </section>
  );
};

Layout.propTypes = propTypes;

export default Layout;