const router = require('express').Router();
const Company = require('../models/company');

module.exports = router
    .get('/', (req, res) => {
        Company.find(req.query)
            .lean()
            .then(companies => res.json(companies));
    })

    .post('/', (req, res) => {
        Company.create(req.body)
            .then(company => res.json(company));
    });