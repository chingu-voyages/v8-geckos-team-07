import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { auth } from '../firebase';

import Layout from '../containers/Layout';
import SocialProfileList from './SocialProfileList';
import HeaderLoggedIn from '../containers/HeaderLoggedIn';
import NewHabit from './NewHabit';
import CheckIn from './check-in';
import CurrentHabit from './CurrentHabit';
import CheckinDetail from './CheckinDetail';
import moment from 'moment';
import CalHM from '../components/CalHM';

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
        newEntryButton: true,
        habitData: {checkins: []},
        user: '',
        hamburgerOpen: false,
        checkIn: false,
        habitExist: false,
        checkIns: [],
        currentCheckin: undefined,
        checkInButton: true,

    };

    
    updateHabitData = () => {
        if(this.state.user !== ''){
        axios.get('/api/habits/first-habit/' + this.state.user)
            .then(res => 
                this.setState({ habitData: res.data.data, checkIns: res.data.data.checkins }, () => {
                    this.dateCheck()

                    this.state.habitData ? this.setState({newEntry: false, newEntryButton: false, habitExist: true}) : 
                                        this.setState({newEntry: true, newEntryButton: true, habitExist: false});
                })
            )
            .catch(error =>
                console.log(error)
            )
        }
    }

    dateCheck = () => {
        let dates = [];
        this.state.checkIns.forEach(date => dates.push(date.checkinDate));
        const date = Date();
        if(dates.includes(moment(new Date(date)).format("MMMM Do YYYY"))) {
            this.setState({checkInButton: false}) 
        }
    }

    // Set inital state in componentWillMount (user)

    componentWillMount = () => {
        this.updateProviders(this.state.providerData);
        const user = this.state.providerData
        this.setState({ user: user[0].email });
    }

    // Pull in the habit data (Ajax calls) in ComponentDid Mount

    componentDidMount = () => {
        this.updateHabitData();
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
        this.setState((prevState) => ({
            newEntry: !prevState.newEntry
        }));
    }
    handleNewHabitSubmit = (data) => {
        this.setState({newEntry: false, habitExist: true, newEntryButton: false, habitData: data});
    }


    handleCheckInSubmit = (data) => {
        this.updateHabitData();
    }

    handleSelectCheckin = (date) => {
        if(date) {
            this.setState({
                currentCheckin: this.state.checkIns.find(checkIn => checkIn.checkinDate === date)
            });
        } else {
            this.setState({currentCheckin: undefined});
        }
    }

    //toggle visability of sidebar with Button
    hamburgerToggle = () => {
        this.setState((prevState) => ({
            hamburgerOpen: !prevState.hamburgerOpen
        }));
    }

    //open check in form
    handleCheckIn = () => {
        this.setState((prevState) => ({
            checkIn: !prevState.checkIn
        }))
    }

   
    render() {

        let newHabitButton = null;
        if (this.state.newEntryButton){
            newHabitButton = <button className='habitButton' onClick={this.handleNewHabit} >Create New Habit</button>
        } else {
            newHabitButton = null
        }

        let checkInComp = null;
        let checkInButton = null;

        if (this.state.checkInButton === false){
            checkInButton = null
        } else if (this.state.habitExist){
          
            checkInComp = <CheckIn checkIn={this.state.checkIn} 
                    habitId={this.state.habitData._id}
                    handleCheckIn={this.handleCheckIn} 
                    handleCheckInSubmit={this.handleCheckInSubmit} />;
            checkInButton = <button className='habitButton' onClick={this.handleCheckIn}>Check In</button>
        } else {
            checkInComp = null;
            checkInButton = null;
        }

        return (
            <div>
                <HeaderLoggedIn {...this.state} hamburgerToggle={this.hamburgerToggle}
                
                auth={auth.getAuth}
                providerData={this.state.providerData}
                unlinkedProvider={this.handleUnlinkedProvider} 
                >
                <div id="userDisplay">
                <SocialProfileList
                    auth={auth.getAuth}
                    providerData={this.state.providerData}
                    unlinkedProvider={this.handleUnlinkedProvider} />
                <NewHabit data={this.state.providerData} 
                    handleNewHabitSubmit={this.handleNewHabitSubmit} 
                    newEntry={this.state.newEntry}
                    handleNewHabit={this.handleNewHabit} />
                {checkInComp}

                <button
                    className="btn__logout"
                    onClick={() => auth.getAuth().signOut()}>
                    <i class="far fa-window-close"></i>&nbsp;
                    Logout
                </button>        
            </div>

            </HeaderLoggedIn>
            <Layout {...this.state}>
                <h2>Daily Dashboard</h2>
                {newHabitButton}
                {checkInButton}
                <CalHM {...this.state.habitData} selectCheckin={this.handleSelectCheckin}/>
                {this.state.currentCheckin && <CheckinDetail {...this.state.currentCheckin} />}
                <CurrentHabit {...this.state.habitData} />
            </Layout>
            </div>
        );
    }
}

export default Dashboard;