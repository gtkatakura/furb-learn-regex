const { Strategy } = require('passport-facebook');

const create = ({ config, users }) => {
  const passportConfig = {
    clientID: config.get('authentication.facebook.clientId'),
    clientSecret: config.get('authentication.facebook.clientSecret'),
    callbackURL: '/api/authentication/facebook/redirect',
    profileFields: ['id', 'name', 'emails'],
  };

  if (!passportConfig.clientID) {
    return null;
  }

  return new Strategy(passportConfig, async (accessToken, refreshToken, profile, done) => {
    const user = await users.findOrCreateUser(
      profile.displayName,
      'facebook',
      profile.id,
      profile.emails[0].value,
    );

    return done(null, user);
  });
};

module.exports = { create };
