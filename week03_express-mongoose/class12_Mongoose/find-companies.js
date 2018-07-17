const mongoose = require('mongoose');
const connect = require('./lib/connect');
const Company = require('./lib/models/company');

connect('mongodb://localhost:27017/companies_demo');

// find by id
Company.findById('5b4e6bb404cc451d533c4f5e')
    .lean()
    .then(company => {
        console.log(company);

        return Company.find()
            .lean()
            .select('name rating');
    })
    .then(companies => {
        console.log(companies);
    })
    .catch(console.log)
    .then(() => mongoose.connection.close());
