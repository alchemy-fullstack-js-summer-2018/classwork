const express = require('express');
const app = express();
const path = require('path');
const penguins = require('./penguins');

const publicDir = path.resolve(__dirname, '../public');

app.use(express.static(publicDir));

app.use(express.json());

app.use('/penguins', penguins);

app.listen(3000);
