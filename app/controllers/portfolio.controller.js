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


exports.create = (req, res) => {
 // Validate request
 console.log(req.body);
 if(!req.body) {
    return res.status(400).send({
        message: "Portfolio content can not be empty"
    });
}


const portfolio = new Portfolio({
   		sno: req.body.sno,
   		candidateName: req.body.candidateName,
		priority:req.body.priority,
		status:req.body.status,
		action:req.body.action,
		actionDate:Date.Now
});

portfolio.save()
.then(data => {
    res.send(data);
}).catch(err => {
    res.status(500).send({
        message: err.message || "Some error occurred while creating the Portfolio."
    });
});
};

exports.findAll = (req, res) => {
    Portfolio.find()
    .then(portfolios => {
        res.send(portfolios);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving portfolios."
        });
    });
};

exports.findOne = (req, res) => {

};

exports.update = (req, res) => {
	if(!req.body.content) {
        return res.status(400).send({
            message: "Portfolio content can not be empty"
        });
    }

    Portfolio.findByIdAndUpdate(req.params.sno, {
     
		candidateName: req.body.candidateName,
		priority:req.body.priority,
		status:req.body.status,
		action:req.body.action,
		actionDate:Date.Now
    }, {new: true})
    .then(portfolio => {
        if(!portfolio) {
            return res.status(404).send({
                message: "Portfolio not found with id " + req.params.sno
            });
        }
        res.send(portfolio);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Portfolio not found with id " + req.params.sno
            });                
        }
        return res.status(500).send({
            message: "Error updating Portfolio with id " + req.params.sno
        });
    });
};


exports.delete = (req, res) => {
	console.log(req.params);
	Portfolio.findByIdAndRemove(req.params._id)
    .then(portfolio => {
		console.log(portfolio);
        if(!portfolio) {
            return res.status(404).send({
                message: "Portfolio not found with id " + req.params._id
            });
        }
        res.send({message: "Portfolio deleted successfully!"});
    }).catch(err => {
		console.log(err);
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Portfolio not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Could not delete portfolio with id " + req.params.id
        });
    });
};