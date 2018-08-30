const tokenService = require('./token-service');

module.exports = function() {
    return (req, res, next) => {
        // read the HTTP Authorization header
        const token = req.get('Authorization');
        try {
            // if no token, return a 400
            if(!token) return next({ status: 400, error: 'No token found' });

            // verify the token is valid, and get the associated payload
            const payload = tokenService.verify(token);

            // assign the payload to "req.user" so routes can know who the user is.
            req.user = payload;
            
            // keep going...
            next();
        
        }
        catch(err) {
            next({
                status: 401,
                error: 'Invalid token'
            });
        }
    };
};