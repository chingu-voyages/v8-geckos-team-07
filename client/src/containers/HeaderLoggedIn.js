import React from 'react';

import PropTypes from 'prop-types';
import Hamburger from '../components/Hamburger.js';

const propTypes = {
    children: PropTypes.node.isRequired,
    contentCenter: PropTypes.bool
};

const HeaderLoggedIn = ({ children, contentCenter }) => {
    return (
        <section>
            <header className="headerLogin">
                <Hamburger />
               
                <h1>Habit Tracker</h1>

                {children}
            </header> 
        </section>
    );
};

HeaderLoggedIn.propTypes = propTypes;

export default HeaderLoggedIn;