import React, { Component } from 'react';
import UserIcon from '../images/user-icon.svg'

const Header = (props) => {
    return (

        <header className="headerLogin">
        
            <h1>[placeholder]</h1>
            <h1>Habit Tracker</h1>
            <div className="user">
                <p>Hello, <img src={UserIcon} alt="user icon" /></p>

                <p>User Name</p>
            </div>
    </header>
    );
}

export default Header;