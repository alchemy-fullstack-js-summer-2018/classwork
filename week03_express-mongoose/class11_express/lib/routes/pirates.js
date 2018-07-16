const router = require('express').Router();
const Pirates = require('../models/pirate');

module.exports = router
    .get('/', (req, res) => {
        Pirates.find()
            .then(pirates => res.json(pirates));
    })

    .get('/:id', (req, res) => {
        Pirates.findById(req.params.id)
            .then(pirate => res.json(pirate));
    })

    .post('/', (req, res) => {
        Pirates.create(req.body)
            .then(pirate => res.json(pirate));
    });
    