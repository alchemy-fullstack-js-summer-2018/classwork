/* eslint no-console: off */
const auth = require('../services/auth');

module.exports = function getEnsureAuth() {

    return function ensureAuth(req, res, next) {
        const token = req.get('Authorization') || req.get('authorization');
        if (!token) return next({ code: 401, error: 'No Authorization Found' });
            
        auth.verify(token)
            .then(
                result => {
                    req.user = { id: result.uid };
                    next();
                }, () => {
                    next({ code: 401, error: 'Authorization Failed' });
                }
            );
    };

};