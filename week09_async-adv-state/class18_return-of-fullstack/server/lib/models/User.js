const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
const { RequiredString } = require('./required-types');

const schema = new Schema({
    email: RequiredString,
    hash: RequiredString,
    roles: [String]
});

schema.methods = {
    generateHash(password) {
        this.hash = bcrypt.hashSync(password, 8);
    },
    comparePassword(password) {
        return bcrypt.compareSync(password, this.hash);
    } 
};

module.exports = mongoose.model('User', schema);