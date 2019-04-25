import React from 'react';

import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node.isRequired,
    contentCenter: PropTypes.bool,
};

const HeaderLoggedIn = ({ children, contentCenter, hamburgerToggle, hamburgerOpen }) => {
    return (
        <section>
            <header className="headerLogin">
                    <button
                        onClick={hamburgerToggle}
                        onKeyPress={hamburgerToggle}
                        aria-haspopup="true"
                        aria-expanded={"false"} 
                        id="hamburger-menu" >
                    <i className="main-button-icon fa fa-bars fa-3x"></i>
                    </button>

                    <nav id="sidebar" className={hamburgerOpen ? "open" : null }>
                        <ul>
                            <li>User Settings</li>
                            <li>About</li>
                            <li>Resources</li>
                        </ul>
                    </nav>
               
                <h1>Habit Tracker</h1>

                {children}
            </header> 
        </section>
    );
};

HeaderLoggedIn.propTypes = propTypes;

export default HeaderLoggedIn;