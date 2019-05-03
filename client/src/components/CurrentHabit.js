import React from 'react';
import moment from 'moment';
import Countdown from 'react-countdown-now';

const CurrentHabit = ({_id, habit, length, date, smart}) => {
  if(!_id) {
      return (<h2>No current habits!</h2>)
  } else {
      // startDate is a string (for display); endDate is a date object (for countdown)
      const startDate = moment(new Date(date)).format("MMMM Do YYYY");
      const endDate = moment(new Date(date)).add(length, 'months').toDate();
      
      return (
        <div>
            <h2>Current habit info:</h2>
            <p>Habit name: {habit}</p>
            <p>Start date: {startDate}</p>
            <p>Smart habits:</p>
            <ul>{smart.map(item => <li key={item}>{item}</li>)}</ul>
            <p>Duration (months): {length} </p>
            <p>Countdown to finish: <Countdown date={endDate} /> </p>
        </div>
  )}
}

export default CurrentHabit;
