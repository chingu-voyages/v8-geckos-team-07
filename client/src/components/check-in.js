import React, { Component } from 'react';

const CheckIn = (props) => {
    return (
        <form className="daily-check-in">
        <h2>Daily Check In</h2>
        <p>Habit Tracking: *insert habit name here*</p>
         
        <fieldset>  
        <legend>How did you do today?</legend>
          <input id="1" type="radio" name="check-in" value="killed-it"/> <label for="1">Killed it</label>
          <input id="2" type="radio" name="check-in" value="completed"/> <label for="2">Completed</label>
          <input id="3" type="radio" name="check-in" value="tried"/> <label for="3">Tried</label>
          <input id="4" type="radio" name="check-in" value="failed"/> <label for="4">Failed</label>
          <input id="5" type="radio" name="check-in" value="skip"/> <label for="5">Skip*</label>
          <p>*Skip is for non-daily habits you are tracking. Or can be used when you are sick or on vacation.</p>
          </fieldset>
            
          <label for="mood">What was your mood today?</label>
          <select id="mood" name="mood">
            <option name="mood" value="tried">Productive/ Energetic</option>
            <option name="mood" value="tried">Happy/ Joyful</option>
            <option name="mood" value="completed">Average</option>
            <option name="mood" value="skip">Stressed</option>
            <option name="mood" value="killed-it">Angry/ Grumpy</option>
            <option name="mood" value="skip">Sad</option>
            <option name="mood" value="skip">Nervous/ Anxious</option>
            <option name="mood" value="failed">Tired</option>
            <option name="mood" value="skip">Sick</option>
          </select>
      
          <label for="evaluation">What went well? or Why did you fail?</label><br />
          <textarea id="evaluation" name="personalEvaluation"></textarea>
          <label for="notes">Personal Notes:</label><br />
          <textarea id="notes" name="personalNotes"></textarea>

          <button type="submit">Submit</button>
        </form>
    );
}
export default CheckIn;
