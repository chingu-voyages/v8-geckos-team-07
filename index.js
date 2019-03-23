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

// DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose.connect(db)
	.then(() => console.log('DB connected...'))
	.catch(err => console.log(err));

// Use Routes
app.use('/api/habits', habits);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port ' + port));