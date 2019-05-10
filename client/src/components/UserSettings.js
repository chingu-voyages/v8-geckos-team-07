import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../containers/Layout';
import axios from 'axios';
class UserSettings extends Component {
    state = {
        user: '',
        habitTracked: undefined,
        showConfirm: false
    };

    componentWillMount = () => {
        this.setState({user: this.props.providerData[0].email})
    }
    
    componentDidMount = () => {
        this.updateHabitData();
    };

    updateHabitData = () => {
        axios.get('/api/habits/first-habit/' + this.state.user)
             .then(res => this.setState({habitTracked: res.data.data}))
             .catch(error => console.log(error));
    }

    handleDeletePressed = () => {
        this.setState({showConfirm: true});
    }

    handleDeleteAborted = () => {
        this.setState({showConfirm: false});
    }

    handleDeleteConfirmed = () => {
        this.setState({showConfirm: false});
        axios.delete('/api/habits/habit/' + this.state.habitTracked._id)
            .then(res => this.updateHabitData())
            .catch(error => console.log(error))        
    }

    render() {


        return (
            <Layout>
                <h2>User Settings </h2>
                <h3>Account Info</h3>
                <p>Account: {this.state.user}</p>
                {this.state.habitTracked && 
                    <div>
                        <p>Current Habit: {this.state.habitTracked.habit}</p>
                        <p>
                            <button className="habitButton" onClick={this.handleDeletePressed}>
                                Delete My Habits
                            </button>
                        </p>
                    </div>
                }
                {!this.state.habitTracked && 
                    <p>No habits currently being tracked.</p>
                }
                <Link to="/Dashboard" >Back to Dashboard</Link>


                {/* The "are you sure" modal*/}
                <div className={this.state.showConfirm ? "modal display-block" : "modal display-none"}>
                    <div className="confirm">
                        <h1>Please confirm!</h1>
                        <h2>Are you really, really, really sure?</h2>
                        <p>Do you w ant to to delete all of the data
                            and all of your hard work, forever?</p>
                        
                        <p>
                            <button onClick={this.handleDeleteConfirmed} className="habitButton">
                                DELETE IT!
                            </button>
                            <button onClick={this.handleDeleteAborted} className="habitButton">
                                No, take me back
                            </button>
                        </p>
                    </div>
                </div>
            </Layout>
        )
    }
}
export default UserSettings;