const mongoose = require('mongoose');
const connect = require('./lib/connect');
const Company = require('./lib/models/company');

connect('mongodb://localhost:27017/companies_demo');

const body = {
    name: 'Company 2',
    address: { state: 'OR' },
    rating: 2
};

Company.create(body)
    .catch(console.log)
    .then(() => mongoose.connection.close());
