import React from 'react';

import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node.isRequired,
    contentCenter: PropTypes.bool
};

const defaultProps = {
    contentCenter: false
};

const HeaderLoggedIn = ({ children, contentCenter }) => {
    return (
        <section>
            


           
                {children}
        

           
        </section>
    );
};


HeaderLoggedIn.propTypes = propTypes;
HeaderLoggedIn.defaultProps = defaultProps;

export default HeaderLoggedIn;