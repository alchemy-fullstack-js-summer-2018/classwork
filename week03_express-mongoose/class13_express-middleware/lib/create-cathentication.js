
module.exports = function createCathentication(password = 'meow') {

    return (req, res, next) => {
        if(req.query.password === password) {
            next();
        }
        else {
            res.sendStatus(401);
        }
    };
};
