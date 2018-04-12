const express = require('express');
const passport = require('passport');

const app = express.Router();

const authenticationRoute = require('./authentication');
const entitiesRoute = require('./entities');

app.use('/api', authenticationRoute);
app.use('/api', passport.authenticate('jwt', { session: false }), entitiesRoute);

module.exports = app;
