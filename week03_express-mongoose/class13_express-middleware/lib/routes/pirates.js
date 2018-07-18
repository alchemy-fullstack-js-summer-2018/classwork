const router = require('express').Router();
const Pirate = require('../models/pirate');

module.exports = router
    .get('/', (req, res) => {
        Pirate.find()
            .lean()
            .then(pirates => res.json(pirates))
            .catch(console.log);
    })

    .get('/:id', (req, res) => {
        Pirate.findById(req.params.id)
            .lean()
            .then(pirate => res.json(pirate));
    })

    .post('/', (req, res) => {
        Pirate.create(req.body)
            .then(company => res.json(company));
    })
    
    .put('/:id', (req, res) => {
        Pirate.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        )
            .then(pirate => res.json(pirate));
    })

    .delete('/:id', (req, res) => {
        Pirate.findByIdAndRemove(req.params.id)
            .then(pirate => res.json({ removed: !!pirate }));
    });