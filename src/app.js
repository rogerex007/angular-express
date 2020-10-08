const express = require('express');
const morgan = require('morgan');

const {createRoles} = require('./libs/initialSetup');

const employessRoutes =  require('./routes/employess.routes');
const authRoutes = require('./routes/auth.routes');

const app = express()
createRoles();

//Constans
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/api/employess', employessRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;