import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../containers/Layout';

class UserSettings extends Component {
    
    render() {
        return (
            <Layout>
                <h2>User Settings </h2>
                <p>Ability to change data about habit?</p>
                <p>Button to unlink google account</p>
                <p>Button to delete data from database</p>


                <Link to="/Dashboard">Back to Dashboard</Link>

            </Layout>
        )
    }
}
export default UserSettings;