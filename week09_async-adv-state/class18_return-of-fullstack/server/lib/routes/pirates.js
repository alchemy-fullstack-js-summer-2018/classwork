const router = require('express').Router();
const Pirate = require('../models/Pirate');
const weapons = require('./weapons');
const { getParam, respond } = require('./route-helpers');

module.exports = router

    .param('id', getParam)

    .post('/', respond(
        ({ body }) => Pirate.create(body)
    ))
    
    .put('/:id', respond(
        ({ id, body }) => Pirate.updateById(id, body)
    ))

    .get('/:id', respond(
        ({ id }) => Pirate.getDetailById(id)
    ))
    
    .get('/', respond(
        ({ query }) => Pirate.getByQuery(query)
    ))
    
    .delete('/:id', respond(
        ({ id }) => Pirate.findByIdAndRemove(id)
    ))

    .use('/:id/weapons', weapons);