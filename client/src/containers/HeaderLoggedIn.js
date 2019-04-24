import React from 'react';

import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node.isRequired,
    contentCenter: PropTypes.bool
}; 

const HeaderLoggedIn = ({ children, contentCenter }) => {
    return (
        <section>
            <header className="headerLogin">
                <aside>
                    <button
                            onClick={propTypes.hamburgerToggle}
                            onKeyPress={propTypes.hamburgerToggle}
                            aria-haspopup="true"
                            aria-expanded={"false"} 
                            id="hamburger-menu"
                            className={propTypes.hamburgerOpen ? "open" : null }>
                        <i className="main-button-icon fa fa-bars fa-2x"></i>
                    </button>

                    <nav id="sidebar" className={propTypes.sidebarToggle ? "open" : null }>
                        <ul>
                            <li>About</li>
                            <li>Resources</li>
                            <li>Unlink</li>
                        </ul>
                    </nav>
                </aside>
               
                <h1>Habit Tracker</h1>

                {children}
            </header> 
        </section>
    );
};

HeaderLoggedIn.propTypes = propTypes;

export default HeaderLoggedIn;