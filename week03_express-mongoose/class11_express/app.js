const express = require('express');
const app = express();

app.get('/fruits/:id', (req, res) => {
    const { path, method, params, query } = req;

    res.json({
        path,
        method,
        params,
        query
    });

});

app.listen(3000);