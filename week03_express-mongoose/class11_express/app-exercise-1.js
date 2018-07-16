const express = require('express');
const app = express();

app.get('/foo/:one/:two', (req, res) => {
    res.setHeader('magic', true);
    res.json({
        routePath: req.url,
        method: req.method,
        params: req.params,
        query: req.query
    });
});

app.listen(3001);