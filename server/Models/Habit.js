const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Create Schema
const HabitSchema = new Schema({
	// Name should autopopulate once Auth is complete, we will connect the db's
	name: {
		type: String,
		required: true
	},
	// The date the habit was entered into the tracker
	date: {
		type: Date,
		default: Date.now
	},
	// The specific habit to track
	habit: {
		type: String,
		required: true
	},
	// SMART Goals
	smart: {
		type: Array,
		required: false
	},
	// length of time to track the habit
	length: {
		type: Number,
		required: true
	},
	// How often will the user need to check in
	intervals: {
		type: String,
		required: false
	},
	// optional** user can add a reward
	reward: {
		type: String,
		required: false
	}
});

module.exports = Habit = mongoose.model('habit', HabitSchema)