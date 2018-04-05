const express = require('express');
const passport = require('passport');

const strategies = require('../authentication/strategies');
const { generateAccessToken } = require('../authentication/token');

const app = express.Router();

Object.values(strategies).forEach(strategy => {
  if (strategy) {
    passport.use(strategy);
  }
});

function generateUserToken(req, res) {
  const accessToken = generateAccessToken(req.user.id);

  res.cookie('X-JWT-Token', accessToken);
  res.cookie('X-User-Name', req.user.name);
  res.redirect('/');
}

app.use(passport.initialize());

app.get('/api/authentication/google/start', passport.authenticate('google', {
  session: false,
  scope: ['openid', 'profile', 'email'],
}));

app.get(
  '/api/authentication/google/redirect',
  passport.authenticate('google', { session: false }),
  generateUserToken,
);

app.get('/api/authentication/facebook/start', passport.authenticate('facebook', {
  session: false,
}));

app.get(
  '/api/authentication/facebook/redirect',
  passport.authenticate('facebook', { session: false }),
  generateUserToken,
);

const exercisesRoute = require('./exercises');
const activitiesRoute = require('./activities');

app.use('/api/exercises', passport.authenticate('jwt', { session: false }), exercisesRoute);
app.use('/api/activities', passport.authenticate('jwt', { session: false }), activitiesRoute);

module.exports = app;
