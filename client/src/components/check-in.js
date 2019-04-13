import React, { Component } from 'react';
import axios from 'axios'

class CheckIn extends Component {
    state = {
      habit: '',
      effort: '',
      mood: '',
      selfEval: '',
      notes: '',
      fieldsValid: true,
      date: new Date()
    }

    handleSubmit = (event) => {
      event.preventDefault();
      if (this.state.habit.length > 0 && this.state.effort.length > 0 && this.state.mood.length > 0){
          this.setState({fieldsValid: true});    
          const { habit, effort, mood, selfEval, notes } = this.state;
          axios.post('/api/habits/checkin', { habit, effort, mood, selfEval, notes })
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

    render(){
      return (
        <div className="daily-check-in">
        <form onSubmit={this.handleSubmit}>
          <h2>Daily Check In</h2>
          <p>Habit Tracking: *insert habit name here*</p>
          
          <fieldset>
            {/*  Testing only - remove from production */ }
            <label htmlFor="habit">Enter Habit ID (Tesing Only Field)</label> <br />
            <input type="text" id="habit" name="habit" 
                value={this.state.habit} onChange={this.onChange}   />

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
        
            <label htmlFor="selfEval">What went well? or Why did you fail?</label><br />
            <textarea id="selfEval" name="selfEval" value={this.state.selfEval} onChange={this.onChange}></textarea>

            <label htmlFor="notes">Personal Notes:</label><br />
            <textarea id="notes" name="notes" value={this.state.notes} onChange={this.onChange}></textarea>

            <button className="submit" type="submit">Submit</button>
          </form>
          </div>
      )};

}
export default CheckIn;
