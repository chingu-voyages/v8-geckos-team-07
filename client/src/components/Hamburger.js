import React from 'react'

  const Hamburger= (props) => {
    return (
            <button
                onClick={props.hamburgerToggle}
                onKeyPress={props.hamburgerToggle}
                aria-haspopup="true"
                aria-expanded={"false"} 
                id="hamburger-menu"
                className={props.hamburgerToggle ? "open" : null } >
            <i className="main-button-icon fa fa-bars fa-2x"></i>
            </button>
    );
}

export default Hamburger;