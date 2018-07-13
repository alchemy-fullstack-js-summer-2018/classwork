module.exports = req => {
    return Promise.reject({
        statusCode: 404,
        message: `Cannot ${req.method} ${req.url}`
    });
};