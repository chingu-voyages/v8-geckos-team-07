import React, { Component } from 'react';
import Layout from '../containers/Layout';

class UserSettings extends Component {
    
    render() {
        return (
            <Layout>
                <h2>User Settings </h2>
                <p>Ability to change data about habit?</p>
                <p>Button to unlink google account</p>
                <p>Button to delete data from database</p>   
            </Layout>
        )
    }
}
export default UserSettings;