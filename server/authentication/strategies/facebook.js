const { Strategy } = require('passport-facebook');

const create = ({ config, users }) => {
  const passportConfig = {
    clientID: config.get('authentication.facebook.clientId'),
    clientSecret: config.get('authentication.facebook.clientSecret'),
    callbackURL: '/api/authentication/facebook/redirect',
  };

  if (!passportConfig.clientID) {
    return null;
  }

  return new Strategy(passportConfig, (accessToken, refreshToken, profile, done) => {
    const user = users.findOrCreateUser(profile.displayName, 'facebook', profile.id);
    return done(null, user);
  });
};

module.exports = { create };
