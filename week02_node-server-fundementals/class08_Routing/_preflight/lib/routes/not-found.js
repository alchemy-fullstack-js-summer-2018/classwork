module.exports = (req, res) => {
    res.statusCode = 404;
    res.send({
        error: true,
        message: `Cannot ${req.method} ${req.url}`
    });
};