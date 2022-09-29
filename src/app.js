const express = require('express');
const Router = require('./router');

const app = express();
app.use(Router);

module.exports = app;