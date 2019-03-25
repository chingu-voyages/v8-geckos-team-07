import React from 'react';
import PropTypes from 'prop-types';

import './Layout.css';

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
      <header>
        <h1>Habit Tracker</h1>
      </header>
      <main className={contentCenter ? 'content-center' : ''}>{children}</main>
      <footer>
        
          <div id="special_thanks">
          <p>
            Thank you {' '}
            <span role="img" aria-label="heart emoji">
              ❤️
            </span>{' '}
            <a href="https://blog.bitsrc.io/react-oauth-authentication-with-firebase-dfe0e8c5d0d4" target="_blank" rel="noopener noreferrer">Esau Silva</a>
          </p> 
          </div>
          
        
      </footer>
    </section>
  );
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
