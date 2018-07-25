const { HttpError } = require('./errors');

module.exports = function createCathentication(password = 'meow') {

    return (req, res, next) => {
        if(req.query.password === password) {
            next();
        }
        else {
            const error = new HttpError({
                code: 401,
                message: 'Unauthorized'
            });

            next(error);
        }
    };
};
