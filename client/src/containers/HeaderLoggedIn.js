import React from 'react';

import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node.isRequired,
    contentCenter: PropTypes.bool,
};

const HeaderLoggedIn = ({ children, contentCenter }) => {
    return (
        <section>
            <header className="headerLogin">
                    <button
                            onClick={propTypes.hamburgerToggle}
                            onKeyPress={propTypes.hamburgerToggle}
                            aria-haspopup="true"
                            aria-expanded={"false"} 
                            id="hamburger-menu"
                            className={propTypes.hamburgerOpen ? "open" : null }>
                        <i className="main-button-icon fa fa-bars fa-2x"></i>
                    </button>

                    <nav id="sidebar" className={propTypes.hamburgerToggle ? "open" : null }>
                        <ul>
                            <li>About</li>
                            <li>Resources</li>
                            <li>Unlink</li>
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