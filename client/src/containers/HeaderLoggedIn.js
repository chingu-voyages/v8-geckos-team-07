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
                <i class="main-button-icon fa fa-bars fa-2x"></i>
               
                <h1>Habit Tracker</h1>
                

                {children}
            </header>


           
               
        

           
        </section>
    );
};


HeaderLoggedIn.propTypes = propTypes;


export default HeaderLoggedIn;