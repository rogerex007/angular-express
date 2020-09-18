const express = require('express');
const morgan = require('morgan');

const app = express()

//Constans
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(morgan('dev'));

//Routes
app.use('/api/employess', require('./routes/employess.routes'))

module.exports = app;