module.exports = (app) => {
    const portfolio = require('../controllers/portfolio.controller.js');

    // Create a new Note
    app.post('/portfolio', portfolio.create);

    // Retrieve all Notes
    app.get('/portfolio', portfolio.findAll);

    // Retrieve a single Note with Portfolio
    app.get('/portfolio/:sno', portfolio.findOne);

    // Update a Note with Portfolio
    app.put('/portfolio/:sno', portfolio.update);

    // Delete a Note with Portfolio
    app.delete('/portfolio/:_id', portfolio.delete);
}