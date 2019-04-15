import React, { Component } from 'react';
import { auth } from '../firebase';
import UserIcon from '../images/user-icon.svg'

class HeaderLoggedIn extends Component {
    
    render() {
        return (
        <header className="headerLogin">
        <div>
            <button
                className="btn__logout"
                onClick={() => auth.getAuth().signOut()}
                >Logout
            </button>
        </div>
        
        <h1>Habit Tracker</h1>
        
        <div>
            <p>Social profile list data not showing up...</p>
           
            <div className="user">
                <p>Hello, <img src={UserIcon} alt="user icon"/></p>
                <p>User Name</p>
            </div>
        </div>
    </header>
        );
    }
}

export default HeaderLoggedIn;