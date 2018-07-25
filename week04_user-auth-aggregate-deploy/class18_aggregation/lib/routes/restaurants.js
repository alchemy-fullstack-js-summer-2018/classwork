const router = require('express').Router();
const Restaurant = require('../models/restaurant');

module.exports = router
    .get('/stats', (req, res, next) => {
        Restaurant.averagesAllBoroughs()
            .then(results => res.json(results))
            .catch(next);
    })

    .get('/stats/:borough', (req, res, next) => {
        Restaurant.averagesOneBorough(req.params.borough)
            .then(results => res.json(results))
            .catch(next);
    });

// above path needs to be _before_ parameterized route
// .get('/:id', (res, res, next) => {

// })