import React from 'react';
import { Link } from 'react-router-dom';
import Gecko from '../images/gecko.png';
const NotFound = () => (
    <div>
        <h1>Sorry, page not found...</h1>
        <img src={Gecko} style={{ display: 'block', margin: 'auto', position: 'relative' }} alt={"404 not found page image"} />
        <center><Link to="/">Return to Home Page</Link></center>
    </div>
);
export default NotFound;