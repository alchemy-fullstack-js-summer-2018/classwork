
module.exports = function(requiredRole) {
    return (req, res, next) => {
        if(req.user.roles.every(r => r !== requiredRole)) {
            next({
                status: 403,
                error: `requires ${requiredRole} role`
            });
        }
        else next();
    };
};