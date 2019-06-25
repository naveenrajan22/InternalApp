const Portfolio = require('../models/portfolio.model.js');

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

// Create and Save a new Note
exports.create = (req, res) => {
 // Validate request
 console.log(req.body);
 if(!req.body) {
    return res.status(400).send({
        message: "Portfolio content can not be empty"
    });
}

// Create a Note
const portfolio = new Portfolio({
    sno: 1,
    candidateName: "Naveen",
    priority:"Low",
    status:"Open",
    action:"Closed",
    actionDate:Date.Now
});

// Save Note in the database
portfolio.save()
.then(data => {
    res.send(data);
}).catch(err => {
    res.status(500).send({
        message: err.message || "Some error occurred while creating the Note."
    });
});
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Portfolio.find()
    .then(portfolios => {
        res.send(portfolios);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {

};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};