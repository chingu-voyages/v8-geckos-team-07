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
      <main className={contentCenter ? 'content-center' : ''}>
      {children}
      
          <h2>Test Heading Level 2</h2>
          <h3>This is a Heading Level 3</h3>
          <p>Paragraphs of text look like this.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus id elit ut ultrices. Nunc pretium lacus quis aliquam tempus. Nullam non fermentum tellus, eu semper massa. Nunc at libero augue. Curabitur est nunc, auctor viverra interdum a, fringilla vel ex. Aliquam tellus urna, accumsan sed ex ac, rhoncus aliquet turpis. Morbi at sapien vel ipsum malesuada luctus. Proin efficitur iaculis ipsum, eget blandit nulla commodo ut. Proin at elit sit amet enim mollis semper eget quis nisl. Suspendisse sed metus ante. Ut venenatis nibh sit amet leo sollicitudin rutrum. In hac habitasse platea dictumst. Nullam ac nisi et lorem accumsan vestibulum eu sed erat.</p>
       
      </main>
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
