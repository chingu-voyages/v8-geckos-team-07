import React from 'react';

function HabitSubmission(props){

	const showSubmit = props.submit ? 'submission subdisplay-block' : 'submission subdisplay-none';

	return (
		<div className={showSubmit}>
			<h1>Submission Complete</h1>
			<button className="okbutton" onClick={props.handleOkClick}>OK</button>
		</div>
	)
}

export default HabitSubmission;