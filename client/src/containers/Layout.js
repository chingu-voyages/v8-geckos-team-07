import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../components/footer'

const propTypes = {
  children: PropTypes.node.isRequired,
  contentCenter: PropTypes.bool
};

const defaultProps = {
  contentCenter: false
};

const Layout = ({ children, contentCenter }) => {
  return (
    <section>
      {/* <Header /> Need to swap headers based of if user logged in */}
      
      
      <main className={contentCenter ? 'content-center' : ''}>
        {children}
      </main>
      
      <Footer />
    </section>
  );
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
