const notFound = require('./not-found');
const Pirate = require('../models/pirate');

const get = ({ id }) => id ? getOne(id) : getAll();
const getOne = id => Pirate.findOne(id);
const getAll = () => Pirate.find({});
const post = req => Pirate.insert(req.body);
const put = req => Pirate.update(req.body);
const del = req => Pirate.remove(req.id).then(() => ({ removed: true }));

const methods = { get, post, put, delete: del };

module.exports = (req, res) => {
    const method = methods[req.method.toLowerCase()] || notFound;
    return method(req, res);
};