module.exports = (app) => {
    const portfolio = require('../controllers/portfolio.controller.js');

    // Create a new Note
    app.post('/portfolio', portfolio.create);

    // Retrieve all Notes
    app.get('/portfolio', portfolio.findAll);

    // Retrieve a single Note with noteId
    app.get('/portfolio/:sno', portfolio.findOne);

    // Update a Note with noteId
    app.put('/portfolio/:sno', portfolio.update);

    // Delete a Note with noteId
    app.delete('/portfolio/:dno', portfolio.delete);
}