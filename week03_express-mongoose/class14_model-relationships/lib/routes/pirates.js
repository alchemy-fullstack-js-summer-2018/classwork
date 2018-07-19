const router = require('express').Router();
const Pirate = require('../models/pirate');
const { HttpError } = require('../util/errors');

const updateOptions = {
    new: true,
    runValidators: true
};

const make404 = id => new HttpError({
    code: 404,
    message: `No pirate with id ${id}`
});

module.exports = router
    .get('/', (req, res, next) => {
        Pirate.find()
            .lean()
            .select('name')
            .populate({
                path: 'crew',
                select: 'name'
            })
            .then(pirates => res.json(pirates))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        Pirate.findById(req.params.id)
            .lean()
            .populate({
                path: 'crew',
                select: 'name'
            })
            .populate('weapons')
            .then(pirate => {
                if(!pirate) {
                    next(make404(req.params.id));
                }
                else {
                    res.json(pirate);
                }
            })
            .catch(next);
    })

    .post('/', (req, res, next) => {
        Pirate.create(req.body)
            .then(pirate => res.json(pirate))
            .catch(next);
    })
    
    .put('/:id', (req, res, next) => {
        Pirate.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        )
            .then(pirate => res.json(pirate))
            .catch(next);
    })

    .delete('/:id', (req, res, next) => {
        Pirate.findByIdAndRemove(req.params.id)
            .then(pirate => res.json({ removed: !!pirate }))
            .catch(next);
    })
    
    .post('/:id/weapons', (req, res, next) => {
        Pirate.findByIdAndUpdate(
            req.params.id,
            {
                $push: {
                    weapons: req.body
                }
            },
            updateOptions
        )
            .then(pirate => {
                if(!pirate) {
                    next(make404(req.params.id));
                }
                else {
                    res.json(pirate.weapons[pirate.weapons.length - 1]);
                }
            })
            .catch(next);
    })
    
    .delete('/:id/weapons/:weaponId', (req, res, next) => {
        Pirate.findByIdAndUpdate(
            req.params.id,
            {
                $pull: {
                    weapons: { _id: req.params.weaponId }
                }
            },
            updateOptions
        )
            .then(pirate => {
                if(!pirate) {
                    next(make404(req.params.id));
                }
                else {
                    res.json({ removed: true });
                }
            })
            .catch(next);
    });