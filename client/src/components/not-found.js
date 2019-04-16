import React from 'react';
import { Link } from 'react-router-dom';
import Gecko from '../images/gecko.png';
const NotFound = () => (
    <div>
        
        <header className="App-header">
            <h1>Habit Tracker</h1>
        </header>
        <h2>Sorry, page not found...</h2>
        <img src={Gecko} style={{ display: 'block', margin: 'auto', position: 'relative' }} alt={"404 not found page"} />
        <center><Link to="/">Return to Home Page</Link></center>
    </div>
);
export default NotFound;