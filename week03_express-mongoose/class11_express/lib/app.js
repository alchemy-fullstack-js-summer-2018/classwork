const express = require('express');
const app = express();

// // Common "Middleware":
// const path = require('path');
// const publicDir = path.resolve(__dirname, '../public');
// app.use(express.static(publicDir));
// app.use(express.json());


app.use('/goodbye', (req, res) => {
    res.send('goodbye world!');
});

app.get('/hello', (req, res) => {
    console.log(req.query);
    res.json('Get to hello world!');
});

app.get('/hello/:one/:two/:three', (req, res) => {
    const { one, two, three } = req.params;
    console.log(one, two, three);
    res.json('Get to hello with id');
});

app.post('/hello', (req, res) => {
    res.json({ message: 'post to hello world!' });
});

module.exports = app;