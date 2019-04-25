import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layout from '../containers/Layout';
import SocialProfileList from './SocialProfileList';
import { auth } from '../firebase';
import HeaderLoggedIn from '../containers/HeaderLoggedIn';
import NewHabit from './NewHabit';
import CurrentHabit from './CurrentHabit';
import axios from 'axios';
import Progress from './Progress';


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
        providerData: this.props.providerData,
        newEntry: false,
        habitData: [],
        user: '',
    };

    componentDidMount = () => {
        this.updateProviders(this.state.providerData);
        const user = this.state.providerData
        this.setState({ user: user[0].email })
        axios.get('/api/habits/first-habit/' + user[0].email)
            .then(res => 
                this.setState({ habitData: res.data.data }, () => {
                    this.state.habitData ? this.setState({newEntry: false}) : this.setState({newEntry: true})
                })
            )
            .catch(error =>
                console.log(error)
            )
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

    handleUnlinkedProvider = (providerName, providerData) => {
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

    handleNewHabit = () => {
        this.setState({newEntry: true})
    }
    handleNewHabitSubmit = () => {
        this.setState({newEntry: false})
    }

    render() {

        return (
            <div>
                <HeaderLoggedIn {...this.state}>
                <div id="header">
                <SocialProfileList
                    auth={auth.getAuth}
                    providerData={this.state.providerData}
                    unlinkedProvider={this.handleUnlinkedProvider} />
                <NewHabit data={this.state.providerData} handleNewHabitSubmit={this.handleNewHabitSubmit} newEntry={this.state.newEntry} />
                <button onClick={this.handleNewHabit} >Create New Habit</button>
                <button
                    className="btn__logout"
                    onClick={() => auth.getAuth().signOut()}>
                    Logout
                </button>        
            </div>

            </HeaderLoggedIn>
            <Layout {...this.state}>
                <h2>Daily Dashboard</h2>
                <p>Dashboard.js</p>
                <Progress />
                <CurrentHabit {...this.state.habitData} />

            </Layout>
            </div>
        );
    }
}

export default Dashboard;