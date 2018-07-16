module.exports = (req, res, next, value, name) => {
    req[name] = value;
    next();
};