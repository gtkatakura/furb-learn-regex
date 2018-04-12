const jwt = require('jsonwebtoken');
const config = require('../config');

function generateAccessToken(userId) {
  const expiresIn = '10 hour';
  const audience = config.get('authentication.token.audience');
  const issuer = config.get('authentication.token.issuer');
  const secret = config.get('authentication.token.secret');

  const token = jwt.sign({}, secret, {
    expiresIn,
    audience,
    issuer,
    subject: userId.toString(),
  });

  return token;
}

module.exports = {
  generateAccessToken,
};
