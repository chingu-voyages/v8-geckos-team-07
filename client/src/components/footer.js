import React from 'react';

const Footer = (props) => {
    return (

        <footer id="footer">

            <div id="special_thanks">
                <p>
                    Thank you {' '}
                    <span role="img" aria-label="heart emoji">
                        ❤️
            </span>{' '}
                    <a href="https://blog.bitsrc.io/react-oauth-authentication-with-firebase-dfe0e8c5d0d4" target="_blank" rel="noopener noreferrer">Esau Silva</a>
                </p>
            </div>


        </footer>
    );
}

export default Footer;


