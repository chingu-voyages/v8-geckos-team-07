import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import heatMap from '../images/heat-map-sample.png';
import checkinButton from '../images/checkin-button.png';

const propTypes = {
    children: PropTypes.node.isRequired,
};

const HeaderLoggedIn = ({ children, hamburgerToggle, hamburgerOpen }) => {
    return (
        <section>
            <header className="headerLogin">
                    <button
                        onClick={hamburgerToggle}
                        onKeyPress={hamburgerToggle}
                        aria-haspopup="true"
                        aria-expanded={"false"} 
                        id="hamburger-menu" >
                    <i className="main-button-icon fa fa-bars fa-3x"></i>
                    </button>

                    <nav id="sidebar" className={hamburgerOpen ? "open" : null }>
                            <Link to="/UserSettings" ><h3>User Settings</h3></Link>
                            <h3>About</h3>
                                <p>To use Habit Tracker, users need to check-in daily and reflect on their progress. Use the “Check In” button to log your daily progress. <i><b>Note</b> if you already checked-in for the day that button will not be visible.</i></p>

                                <img src={checkinButton} style={{ display: 'block', margin: '5px auto', width: '100px',  }} alt={"check in button"} />
                                
                                <p>A check-in will color a square on the calendar based on the user’s self-evaluation of: killed it, completed, tried, failed, or skip.<p>

                                <img src={heatMap} style={{ display: 'block', margin: '5px auto', width: '375px',  }} alt={"heat map calendar progress example"} />

                                </p> Users can view their information by hovering on the calendar squares. Clicking on a square will show the data for that day.</p>
                            <h3>Resources</h3>
                                <ul>
                                    <li><a href="https://blog.bitsrc.io/react-oauth-authentication-with-firebase-dfe0e8c5d0d4" target="_blank" rel="noopener noreferrer">Esau Silva</a></li>
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