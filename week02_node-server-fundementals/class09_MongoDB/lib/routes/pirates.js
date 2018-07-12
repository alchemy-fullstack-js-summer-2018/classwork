const notFound = require('./not-found');
const Pirate = require('../models/pirate');

const get = (req, res) => {
    const id = req.id;
    id ? getOne(id, req, res) : getAll(req, res);
};

const getOne = (id, req, res) => {
    
};

const getAll = (req, res) => {
    
};

const post = (req, res) => {
    
};

const put = (req, res) => {
    
};

const del = (req, res) => {
    
};

const methods = { get, post, put, delete: del };

module.exports = (req, res) => {
    const method = methods[req.method.toLowerCase()] || notFound;
    method(req, res);
};