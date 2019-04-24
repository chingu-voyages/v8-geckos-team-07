import React from 'react'

const CurrentHabit = ({_id, habit, length, date}) => {
  if(!_id) {
      return (<h2>No current habits!</h2>)
  } else {
      return (
        <div>
            <h2>Current habit info:</h2>
            <p>Habit name: {habit}</p>
            <p>Duration (months): {length} </p>
        </div>
  )}
}

export default CurrentHabit;
