import React from 'react';

const CheckinDetail = ({checkinDate, mood, effort, selfEval, notes}) => {
  return (
    <div>
      <h2>Check-in detail:</h2>
      {checkinDate && <p>Date: {checkinDate}</p>}
      {effort && <p>Effort: {effort}</p>}
      {mood && <p>Mood: {mood}</p>}
      {selfEval && <h3>Self Evaulation:</h3>}
      {selfEval && <p>{selfEval}</p>}
      {selfEval && <h3>Notes:</h3>}
      {selfEval && <p>{notes}</p>}
    </div>
  )
}

export default CheckinDetail
