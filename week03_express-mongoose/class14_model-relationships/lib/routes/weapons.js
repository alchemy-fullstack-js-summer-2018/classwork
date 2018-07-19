const router = require('express').Router();
const Weapon = require('../models/weapon');
const { HttpError } = require('../util/errors');

const updateOptions = {
    new: true,
    runValidators: true
};

const make404 = id => new HttpError({
    code: 404,
    message: `No weapon with id ${id}`
});

module.exports = router
    .get('/', (req, res, next) => {
        Weapon.find()
            .lean()
            .then(weapons => res.json(weapons))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        Weapon.findById(req.params.id)
            .lean()
            .then(weapon => {
                if(!weapon) {
                    next(make404(req.params.id));
                }
                else {
                    res.json(weapon);
                }
            })
            .catch(next);
    })

    .post('/', (req, res, next) => {
        Weapon.create(req.body)
            .then(company => res.json(company))
            .catch(next);
    })
    
    .put('/:id', (req, res, next) => {
        Weapon.findByIdAndUpdate(
            req.params.id,
            req.body,
            updateOptions
        )
            .then(weapon => res.json(weapon))
            .catch(next);
    })

    .delete('/:id', (req, res, next) => {
        Weapon.findByIdAndRemove(req.params.id)
            .then(weapon => res.json({ removed: !!weapon }))
            .catch(next);
    });