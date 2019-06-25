const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(cors());

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Internal App Portfolio"});
});

let portfolioJson=[
	{
		"sno": "1",
		"candidateName": "Vivek Kumar",
		"priority": "High",
		"status": "Omaha",
		"action": "NE",
		"actionDate": "Contract"
	},
	{
		"sno": "2",
		"candidateName": "Vivek Kumar",
		"priority": "Low",
		"status": "Omaha",
		"action": "NE",
		"actionDate": "Contract"
	},
	{
		"sno": "3",
		"candidateName": "Vivek Kumar",
		"priority": "Medium",
		"status": "Omaha",
		"action": "NE",
		"actionDate": "Contract"
	},
	{
		"sno": "4",
		"candidateName": "Vivek Kumar",
		"priority": "Low",
		"status": "Omaha",
		"action": "NE",
		"actionDate": "Contract"
	},
	{
		"sno": "5",
		"candidateName": "Vivek Kumar",
		"priority": "Low",
		"status": "Omaha",
		"action": "NE",
		"actionDate": "Contract"
	},
	{
		"sno": "6",
		"candidateName": "Vivek Kumar",
		"priority": "Medium",
		"status": "Omaha",
		"action": "NE",
		"actionDate": "Contract"
	},
	{
		"sno": "7",
		"candidateName": "Vivek Kumar",
		"priority": "Medium",
		"status": "Omaha",
		"action": "NE",
		"actionDate": "Contract"
	},
	{
		"sno": "8",
		"candidateName": "Vivek Kumar",
		"priority": "High",
		"status": "Omaha",
		"action": "NE",
		"actionDate": "Contract"
	},
	{
		"sno": "9",
		"candidateName": "Vivek Kumar",
		"priority": "High",
		"status": "Omaha",
		"action": "NE",
		"actionDate": "Contract"
	},
	{
		"sno": "10",
		"candidateName": "Vivek Kumar",
		"priority": "Low",
		"status": "Omaha",
		"action": "NE",
		"actionDate": "Contract"
	}
]

// app.get('/portfolio', (req, res) => {
//     res.json(portfolioJson);
// });
require('./app/routes/portfolio.routes.js')(app);
// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});