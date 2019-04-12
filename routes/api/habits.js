const express = require('express')
const router = express.Router();

// Habit Model
const Habit = require('../../models/Habit.js');

//@route 	POST api/items
//@desc 	Create a habit
//@access	Public
router.post('/newhabit', (req, res) => {
	const newHabit = new Habit({
		name: req.body.name,
		habit: req.body.habit,
		smart: req.body.smart,
		length: req.body.length,
		intervals: req.body.intervals,
		reward: req.body.reward
	});
	newHabit.save().then(habit => res.json(habit));
});

//@route 	POST api/checkin
//@desc 	Perform a checkin for one of your habits
//@access	Public
router.post('/checkin', (req, res) => {
	const checkin = {
		// Date will be autofilled
		effort: req.body.mood,
		mood: req.body.mood,
		selfEval: req.body.selfEval,
		notes: req.body.notes
	}
	// Just to get this off the ground - request should include habit id
	// Probably better use combination of user id + habit name
	Habit.findOneAndUpdate({_id: req.body.habit}, {$push: {checkins: checkin}})
		.then(habit => res.json(habit));
});


//@route 	GET api/items
//@desc 	Get all habits
//@access	Public
router.get('/', (req, res) => {
	Habit.find()
		.then(habits => res.json(habits))
});

module.exports = router;