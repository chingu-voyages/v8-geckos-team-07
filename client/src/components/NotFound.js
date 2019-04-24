import React from 'react';
import { Link } from 'react-router-dom';
import Gecko from '../images/gecko.png';
const NotFound = () => (
    <div>
        
        <header className="App-header">
            <h1>Habit Tracker</h1>
        </header>
        <main>
            <h2>Sorry, page not found...</h2>
            <img src={Gecko} style={{ display: 'block', margin: 'auto', position: 'relative', height: '250px', transform: 'rotate(65deg)'  }} alt={"404 not found page"} />
            <img src={Gecko} style={{ display: 'block', margin: 'auto', position: 'relative', height: '250px' }} alt={"404 not found page"} />
            <br />
            <p><center><Link to="/">Return to Home Page</Link></center></p> 
        </main>
    </div>
);
export default NotFound;