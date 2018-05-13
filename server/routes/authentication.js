const express = require('express');
const session = require('express-session');
const passport = require('passport');
const url = require('url');

const strategies = require('../authentication/strategies');
const { generateAccessToken } = require('../authentication/token');

const app = express.Router();

app.use(session({
  secret: 'session-secret',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 },
}));

Object.values(strategies).forEach(strategy => {
  if (strategy) {
    passport.use(strategy);
  }
});

function generateUserToken(req, res) {
  const accessToken = generateAccessToken(req.user.id);

  res.cookie('X-JWT-Token', accessToken);
  res.cookie('X-User-Id', req.user.id);
  res.cookie('X-User-Name', req.user.name);
  res.redirect(req.session.returnUrl || '/');
  delete req.session.returnUrl;
}

app.use(passport.initialize());

app.get('/authentication/google/start', (req, res, next) => {
  req.session.returnUrl = url.parse(req.header('Referer')).pathname;

  passport.authenticate('google', {
    session: false,
    scope: ['openid', 'profile', 'email'],
  })(req, res, next);
});


app.get(
  '/authentication/google/redirect',
  passport.authenticate('google', { session: false }),
  generateUserToken,
);

app.get('/authentication/facebook/start', (req, res, next) => {
  req.session.returnUrl = url.parse(req.header('Referer')).pathname;

  passport.authenticate('facebook', {
    session: false,
  })(req, res, next);
});

app.get(
  '/authentication/facebook/redirect',
  passport.authenticate('facebook', { session: false }),
  generateUserToken,
);

module.exports = app;
