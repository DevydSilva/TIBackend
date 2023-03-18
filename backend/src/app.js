/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
const express = require('express');
const router = require('./router');

const app = express();
app.use(router);

module.exports = app;