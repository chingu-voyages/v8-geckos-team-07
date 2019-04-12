import React from 'react';
import UserIcon from '../images/user-icon.svg'

const Header = (props) => {
    return (

        <header className="headerLogin">
        
            <h2>[placeholder]</h2>
            <h1>Habit Tracker</h1>
            <div className="user">
                <p>Hello, <img src={UserIcon} alt="user icon" /></p>

                <p>Sign-in / Sign-up</p>
            </div>
    </header>
    );
}

export default Header;