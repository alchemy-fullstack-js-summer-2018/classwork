const router = require('express').Router();
const Pet = require('../models/pet');

module.exports = router
    .get('/', (req, res, next) => {
        Pet.find()
            .select('name').lean()
            .then(pets => res.json(pets))
            .catch(next);
    })
    .get('/:id', (req, res, next) => {
        Pet.findById(req.params.id)
            .lean()
            .then(pet => res.json(pet))
            .catch(next);
    });