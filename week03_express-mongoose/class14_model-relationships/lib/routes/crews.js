const router = require('express').Router();
const Crew = require('../models/crew');
const Pirate = require('../models/pirate');
const { HttpError } = require('../util/errors');

const updateOptions = {
    new: true,
    runValidators: true
};

const make404 = id => new HttpError({
    code: 404,
    message: `No crew with id ${id}`
});

module.exports = router
    .get('/', (req, res, next) => {
        Crew.find()
            .lean()
            .then(crews => res.json(crews))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {

        Promise.all([
            Crew.findById(req.params.id)
                .lean(),
            Pirate
                .find({ crew: req.params.id })
                .lean()
                .select('name')
        ])
            .then(([crew, pirates]) => {
                if(!crew) {
                    next(make404(req.params.id));
                }
                else {
                    crew.pirates = pirates;
                    res.json(crew);
                }
            })
            .catch(next);
    })

    .post('/', (req, res, next) => {
        Crew.create(req.body)
            .then(company => res.json(company))
            .catch(next);
    })
    
    .put('/:id', (req, res, next) => {
        Crew.findByIdAndUpdate(
            req.params.id,
            req.body,
            updateOptions
        )
            .then(crew => res.json(crew))
            .catch(next);
    })

    .delete('/:id', (req, res, next) => {
        Crew.findByIdAndRemove(req.params.id)
            .then(crew => res.json({ removed: !!crew }))
            .catch(next);
    });