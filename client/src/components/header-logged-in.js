import React from 'react'
import UserIcon from '../images/user-icon.svg'

const HeaderLoggedin = (props) => {
    return (
        <header className="headerLogin">
            <h1>[placeholder]</h1>
            <div className="user">
            <p>Hello, <img src={UserIcon} alt="user icon"/></p>
            
            <p>User Name</p>
            </div>
      </header>
    );
}

export default HeaderLoggedin;