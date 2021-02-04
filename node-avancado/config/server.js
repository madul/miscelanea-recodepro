const express = require('express');
const {check, validationResult} = require('express-validator');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.json());
app.use(express.urlencoded())
module.exports = app;