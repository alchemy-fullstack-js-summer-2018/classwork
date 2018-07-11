const notFound = require('./not-found');
const pet = require('../models/pet');

const get = (req, res) => {
    const id = req.paths[1];
    id ? getOne(id, req, res) : getAll(req, res);
};

const getOne = (id, req, res) => {
    pet.selectOne(id)
        .then(one => {
            res.send(one);
        });
};

const getAll = (req, res) => {
    pet.selectAll().then(pets => {
        res.send(pets);
    });
};

const post = (req, res) => {
    pet.insert(req.body).then(saved => {
        res.send(saved);
    });
};

const put = (req, res) => {
    pet.update(req.body).then(updated => {
        res.send(updated);
    });
};

const del = (req, res) => {
    pet.delete(req.paths[1])
        .then(() => res.send({ removed: true }));
};

const methods = { get, post, put, delete: del };

module.exports = (req, res) => {
    const method = methods[req.method.toLowerCase()] || notFound;
    method(req, res);
};