const mongoose = require('mongoose');
const connect = require('./lib/connect');
const Company = require('./lib/models/company');

connect('mongodb://localhost:27017/companies_demo');

const updateOptions = { 
    new: true, 
    runValidators: true 
};

// find by id
Company.findByIdAndUpdate(
    // id
    '5b4e6bb404cc451d533c4f5e',
    // data for updating
    { rating: -2 },
    // options
    { 
        new: true, 
        runValidators: true 
    }
)
    .then(result => console.log(result))  
    .catch(console.log)
    .then(() => mongoose.connection.close());
