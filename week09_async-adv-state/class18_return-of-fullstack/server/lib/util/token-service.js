const jwt = require('jsonwebtoken');
const APP_SECRET = process.env.APP_SECRET || 'changemenow';

module.exports = {
    sign(user) {
        const payload = {
            id: user._id,
            roles: user.roles
        };

        return jwt.sign(payload, APP_SECRET);
    },
    verify(token) {
        // this returns the payload
        return jwt.verify(token, APP_SECRET);
    }
};