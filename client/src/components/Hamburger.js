import React from 'react'

  const Hamburger= (props) => {
    return (
        <aside>
            <button
                    onClick={props.hamburgerToggle}
                    onKeyPress={props.hamburgerToggle}
                    aria-haspopup="true"
                    aria-expanded={"false"} 
                    id="hamburger-menu"
                    className={props.hamburgerOpen ? "open" : null }>
                <i className="main-button-icon fa fa-bars fa-2x"></i>
            </button>

            <nav id="sidebar" className={props.sidebarToggle ? "open" : null }>
                <ul>
                    <li>About</li>
                    <li>Resources</li>
                    <li>Unlink</li>
                </ul>
            </nav>
        </aside>
    );
}

export default Hamburger;