const Pet = require('../models/pet');
const notFound = require('./not-found');

const get = (req, res) => {
    if(req.id) {
        Pet.selectOne(req.id)
            .then(pet => {
                if(!pet) notFound(req, res);
                else res.send(pet);
            });
    }
    else {
        Pet.selectAll()
            .then(pets => res.send(pets));
    }
};

const post = (req, res) => {
    Pet.insert(req.body)
        .then(pet => res.send(pet));
};

const put = (req, res) => {
    Pet.update(req.body)
        .then(pet => res.send(pet));
};

const del = (req, res) => {
    Pet.delete(req.id)
        .then(() => res.send({ removed: true }));
};

const methods = { get, post, put, delete: del };

module.exports = (req, res) => {
    const method = methods[req.method.toLowerCase()] || notFound;
    method(req, res);
};