import React, { Component } from 'react';
import axios from 'axios';
import HabitSubmission from '../habitsubmission/HabitSubmission';

import './newhabit.css'

class NewHabit extends Component {
    state = {
        name: '',
        habit: '',
        smart: [],
        length: '',
        intervals: '',
        date: new Date(),
        lengthValid: true,
        fieldsValid: true,
        submit: false,
    }

    componentDidMount() {
        const user = this.props.data
        this.setState({ name: user[0].email })
        console.log(user[0].email)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.habit.length > 0 && this.state.length.length > 0 && this.state.intervals.length > 0 && this.state.intervals != 'select'){
            this.setState({fieldsValid: true});    
            const { name, habit, smart, length, intervals, date } = this.state;
            axios.post('/api/habits/newhabit', { name, habit, smart, length, intervals, date })
                .then((result) => {
                  console.log(result.data);  
                })
                .catch((error) => {
                    console.log(error);
            })
        } else {
            this.setState({fieldsValid: false});
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    onLengthChange = (e) => {
        const numCheck = /^[0-9]*$/;
        if (numCheck.test(e.target.value)) {
            this.setState({ length: e.target.value, lengthValid: true })
        } else {
            this.setState({ lengthValid: false })
        }
    }

    handleSubmitButton = () => {
        this.setState({submit: true})
    }

    render(){
        let lenError = null
        if (this.state.lengthValid === false) {
            lenError = <p className="error">Please enter a number for length</p>
        } else {
            lenError = null
        }
        let fieldErr = null
        if (this.state.fieldsValid === false) {
            fieldErr = <p className="error">Please enter required fields</p>
        } else {
            fieldErr = null
        }

        const showModal = this.props.newEntry ? "modal display-block" : "modal display-none";

        return (
            <div className={showModal}>
            <div className="newHabit">
                <form onSubmit={this.handleSubmit}>
                    <label className="header">
                    <h2>New Habit</h2>
                    </label>
                    <label>
                        Habit:
                    </label>
                        <input type='text' name='habit' placeholder="Please enter new habit to be tracked"value={this.state.habit} onChange={this.onChange} />
                    <label>
                        Smart Goals: (OPTIONAL)
                    </label>
                        <input type='text' name='smart' placeholder="Please separate goals with commas" 
                        value={this.state.smart} onChange={this.onChange} />
                    <HabitSubmission handleNewHabitSubmit={this.props.handleNewHabitSubmit} submit={this.state.submit} />
                    <label>
                        Length of Time to Track:
                    </label>
                        <input type='text' name='length' placeholder="Please enter time in months" value={this.state.length} onChange={this.onLengthChange} />
                    <label>
                        Daily Checkin Intervals:
                    </label>
                        <select name='intervals' value={this.state.intervals} onChange={this.onChange}>
                            <option value="select">Select One Option Please</option>
                            <option value="daily">Daily</option>
                            <option value="twoDays">Every Two Days</option>
                            <option value="weekly">Weekly</option>
                            <option value="biWeekly">Bi-Weekly</option>
                            <option value="monthly">Monthly</option>
                        </select>
                    { lenError }
                    { fieldErr }
                    <input className="submit" type="submit" value="Start Tracking" onClick={this.handleSubmitButton}/>                   
                </form>
            </div>
            </div>
        )
    }
}

export default NewHabit;