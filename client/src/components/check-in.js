import React, { Component } from 'react';
import CheckInSubmission from './CheckInSubmission';
import axios from 'axios'
import moment from 'moment';

class CheckIn extends Component {
    state = {
      effort: '',
      mood: '',
      selfEval: '',
      notes: '',
      fieldsValid: true,

      date: Date(),
      submit: false,
      checkinData: [],
    }

    componentDidMount () {
      this.setState({ date: moment(new Date(this.state.date)).format("MMMM Do YYYY")  })
    }

    handleSubmit = (event) => {
      event.preventDefault();
      if (this.state.effort.length > 0 && this.state.mood !== ''){
          this.setState({fieldsValid: true});    
          const { effort, mood, selfEval, notes, date } = this.state;
          const habit = this.props.habitId
          axios.post('/api/habits/checkin', { habit, effort, mood, selfEval, notes, date })

              .then((result) => {
                console.log(result.data);
                this.setState({checkinData: result.data.checkins})    
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

    handleSubmitButton = () => {
      this.setState((prevState) => ({
            submit: !prevState.submit
        }))
    }

    handleOkClick = () => {
        this.handleSubmitButton();
      
        this.props.handleCheckInSubmit(this.state.checkinData);

        this.setState({effort: '', mood: '', selfEval: '', notes: ''})
    }

    onClose = (e) => {
      e.preventDefault();
      this.props.handleCheckIn();
      this.setState({ effort: '', mood: '', selfEval: '', notes: ''})
    }

    render(){

        let fieldErr = null
        if (this.state.fieldsValid === false) {
            fieldErr = <p className="error">Please enter required fields</p>
        } else {
            fieldErr = null
        }


      const showModal = this.props.checkIn ? "modal display-block" : "modal display-none";

      return (
        <div className={showModal}>
        <div className="daily-check-in">
        <form onSubmit={this.handleSubmit}>
          <h2>Daily Check In</h2>
          {/* add this in when multiple habits are allowed --
            <label htmlFor="habit">Habit Tracking:</label>
             <select id="habit" name="habit" value={this.state.mood} onChange={this.onChange} >
               <option name="habit" value="habit1">Habit 1</option>
               <option name="habit" value="habit2">Habit 2</option>
             </select> */}


          {/*  Testing only - remove from production
          <label htmlFor="habit">Enter Habit ID (Tesing Only Field)</label> 
          <input type="text" id="habit" name="habit" value={this.state.habit} onChange={this.onChange}   />
          <br /> */}
          
          <fieldset>
          <legend>How did you do today?</legend>
            <input id="1" type="radio" name="effort" value="killed-it" onChange={this.onChange}/> 
            <label htmlFor="1">Killed it</label>            
            <input id="2" type="radio" name="effort" value="completed" onChange={this.onChange}/> 
            <label htmlFor="2">Completed</label>
            <input id="3" type="radio" name="effort" value="tried" onChange={this.onChange} /> 
            <label htmlFor="3">Tried</label>
            <input id="4" type="radio" name="effort" value="failed" onChange={this.onChange}/> 
            <label htmlFor="4">Failed</label>
            <input id="5" type="radio" name="effort" value="skip" onChange={this.onChange}/> 
            <label htmlFor="5">Skip*</label>
            <p>*Skip is for non-daily habits you are tracking. Or can be used when you are sick or on vacation.</p>
            </fieldset>
              
            <label htmlFor="mood">What was your mood today?</label>
            <select id="mood" name="mood" value={this.state.mood} onChange={this.onChange} >
              <option name="mood" value=''>Please Select One</option>
              <option name="mood" value="productive">Productive/ Energetic</option>
              <option name="mood" value="happy">Happy/ Joyful</option>
              <option name="mood" value="average">Average</option>
              <option name="mood" value="stressed">Stressed</option>
              <option name="mood" value="angry">Angry/ Grumpy</option>
              <option name="mood" value="sad">Sad</option>
              <option name="mood" value="nervous">Nervous/ Anxious</option>
              <option name="mood" value="tired">Tired</option>
              <option name="mood" value="sick">Sick</option>
            </select>

            <CheckInSubmission handleOkClick={this.handleOkClick} submit={this.state.submit} />
        
            <label htmlFor="selfEval">What went well? or Why did you fail?</label> 
            <textarea id="selfEval" name="selfEval" value={this.state.selfEval} onChange={this.onChange}></textarea>

            <label htmlFor="notes">Personal Notes:</label>
            <textarea id="notes" name="notes" value={this.state.notes} onChange={this.onChange}></textarea>
            {fieldErr}
            <div className="buttons">
            <input className="button" type="submit" value="Submit" onClick={this.handleSubmitButton} />
            <button className="button" onClick={this.onClose}>Close</button>
            </div>
          </form>
          </div>
          </div>
      )};

}
export default CheckIn;