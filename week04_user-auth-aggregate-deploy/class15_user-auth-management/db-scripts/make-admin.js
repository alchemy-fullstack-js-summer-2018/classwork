require('dotenv').config();
const connect = require('../lib/util/connect');
const User = require('../lib/models/user');
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/pirates';
connect(MONGODB_URI);

User.findByIdAndUpdate(
    '5b57a54a4192466b9e713495',
    { 
        $addToSet: { 
            roles: 'admin'
        }
    }
)
    .catch(console.log)
    .then(() => mongoose.connection.close());


