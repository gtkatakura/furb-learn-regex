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
  res.redirect('/');
}

app.use(passport.initialize());

app.get('/', (request, response) => {
  response.sendFile(`${__dirname}/../client/index.html`);
});

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

module.exports = app;
