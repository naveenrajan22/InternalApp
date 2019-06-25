const mongoose = require('mongoose');

const PortfolioSchema = mongoose.Schema({
    sno: Number,
    candidateName: String,
    priority:String,
    status:String,
    action:String,
    actionDate:Date
}, {
    timestamps: true
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);