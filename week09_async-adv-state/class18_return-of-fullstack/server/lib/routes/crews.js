const router = require('express').Router();
const Crew = require('../models/Crew');
const { getParam, respond } = require('./route-helpers');

module.exports = router

    .param('id', getParam)

    .post('/', respond(
        // off of "req"
        ({ body, user }) => {
            body.owner = user.id;
            return Crew.create(body);
        }
    ))
    
    .put('/:id', respond(
        ({ id, body, user }) => {
            body.owner = user.id;
            return Crew.updateById(id, body);
        }
    ))

    .get('/:id', respond(
        ({ id }) => Crew.getDetailById(id)
    ))
    
    .get('/', respond(
        ({ query }) => Crew.findByQuery(query)
    ))
    
    .delete('/:id', respond(
        ({ id, user }) => Crew.removeById(id, user.id)
            .then(deleted => {
                return { removed: !!deleted };
            })
    ));