import React, { Component } from 'react';
import './newhabit.css'

class NewHabit extends Component {
    state = {
        user: '',
        habit: '',
        smart: [],
        length: '',
        intervals: 0,
        date: '',
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('The following habit was submitted: ' + this.state.habit);
    }

    handleHabit = (event) => {
        this.setState({habit: event.target.value})
    }
    handleSmart = (event) => {
        this.setState({smart: event.target.value})
    }
    handleLength = (event) => {
        this.setState({length: event.target.value})
    }
    handleInterval = (event) => {
        this.setState({interval: event.target.value})
    }

    render(){
        return (
            <div className="newHabit">
                <form onSubmit={this.handleSubmit}>
                    <label className="header">
                    <h2>New Habit</h2>
                    </label>
                    <label>
                        Habit:
                    </label>
                        <input type='text' placeholder="Please enter new habit to be tracked"value={this.state.habit} onChange={this.handleHabit} />
                    <label>
                        Smart Goals:
                    </label>
                        <input type='text' placeholder="Please separate goals with commas" 
                        value={this.state.smart} onChange={this.handleSmart} />
                    <label>
                        Length of Time to Track:
                    </label>
                        <input type='text' placeholder="Please enter time in months" value={this.state.length} onChange={this.handleLength} />
                    <label>
                        Daily Checkin Intervals:
                    </label>
                        <select value={this.state.intervals} onChange={this.handleInterval}>
                            <option value="daily">Daily</option>
                            <option value="twoDays">Every Two Days</option>
                            <option value="weekly">Weekly</option>
                            <option value="biWeekly">Bi-Weekly</option>
                            <option value="monthly">Monthly</option>
                        </select>
                    <input className="submit" type="submit" value="Start Tracking"/>                   
                </form>
            </div>
        )
    }
}

export default NewHabit;