const router = require('express').Router();
const Pirate = require('../models/Pirate');
const { getParam, respond } = require('./route-helpers');

module.exports = router

    .param('weaponId', getParam)

    .post('/', respond(
        ({ id, body }) => Pirate.addWeapon(id, body)
    ))
    
    .put('/:weaponId', respond(
        ({ id, weaponId, body }) => Pirate.updateWeapon(id, weaponId, body)
    ))
    
    .delete('/:weaponId', respond(
        ({ id, weaponId }) => Pirate.removeWeapon(id, weaponId)
    ));