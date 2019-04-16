import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Layout from '../containers/Layout';
import SocialButtonList from './SocialButtonList';
import SocialProfileList from './SocialProfileList';
import { auth } from '../firebase';

class Dashboard extends Component {
    static propTypes = {
        providerData: PropTypes.arrayOf(PropTypes.object).isRequired
    };

    static defaultProps = {
        providerData: []
    };

    state = {
        buttonList: {
            google: {
                visible: true,
                provider: () => {
                    const provider = auth.googleOAuth();
                    provider.addScope('profile');
                    provider.addScope('email');
                    return provider;
                }
            }
        },
        providerData: this.props.providerData
    };

    componentDidMount() {
        this.updateProviders(this.state.providerData);
    }

    handleCurrentProviders = providerData => {
        this.updateProviders(providerData);
    };

    updateProviders = providerData => {
        let buttonList = { ...this.state.buttonList };

        providerData.forEach(provider => {
            const providerName = provider.providerId.split('.')[0];
            buttonList = this.updateButtonList(buttonList, providerName, false);
        });

        this.setState({ buttonList, providerData });
    };

    handleUnliknedProvider = (providerName, providerData) => {
        if (providerData.length < 1) {
            auth
                .getAuth()
                .currentUser.delete()
                .then(() => console.log('User Deleted'))
                .catch(() => console.error('Error deleting user'));
        }

        let buttonList = { ...this.state.buttonList };
        buttonList = this.updateButtonList(buttonList, providerName, true);

        this.setState({ buttonList, providerData });
    };

    updateButtonList = (buttonList, providerName, visible) => ({
        ...buttonList,
        [providerName]: {
            ...buttonList[providerName],
            visible
        }
    });

    render() {
        return (
            <Layout>
                <h1>User Logged In</h1>
                <SocialProfileList
                    auth={auth.getAuth}
                    providerData={this.state.providerData}
                    unlinkedProvider={this.handleUnliknedProvider}
                />
                <p style={{ textAlign: 'center' }}>
                    <strong>Connect Other Social Accounts</strong>
                </p>
                <SocialButtonList
                    buttonList={this.state.buttonList}
                    auth={auth.getAuth}
                    currentProviders={this.handleCurrentProviders}
                />
                <button
                    className="btn__logout"
                    onClick={() => auth.getAuth().signOut()}
                >
                    Logout
        </button>
            </Layout>
        );
    }
}

export default Dashboard;