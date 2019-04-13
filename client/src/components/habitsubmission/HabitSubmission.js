import React from 'react';

import './habitsubmission.css'

function HabitSubmission(props){

	const showSubmit = props.submit ? 'submission display-block' : 'submission display-none';

	return (
		<div className={showSubmit}>
			<h1>Submission Complete</h1>
			<button className="okbutton" onClick={props.handleNewHabitSubmit}>OK</button>
		</div>
	)
}

export default HabitSubmission;