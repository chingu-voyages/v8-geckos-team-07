const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const habits = require('./routes/api/habits')
const app = express();
var path = require('path');
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config from .env file
require('dotenv').config()
const db = process.env.MONGO_URI

//Connect to Mongo
mongoose.connect(db)
	.then(() => console.log('DB connected...'))
	.catch(err => console.log(err));

// Use Routes
app.use('/api/habits', habits);


//TESTING - https://tylermcginnis.com/react-router-cannot-get-url-refresh/
app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'path/to/your/index.html'), function (err) {
		if (err) {
			res.status(500).send(err)
		}
	})
})


const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port ' + port));