const { OAuth2Strategy } = require('passport-google-oauth');

const create = ({ config, users }) => {
  const passportConfig = {
    clientID: config.get('authentication.google.clientId'),
    clientSecret: config.get('authentication.google.clientSecret'),
    callbackURL: '/api/authentication/google/redirect',
    profileFields: ['id', 'displayName', 'email'],
  };

  if (!passportConfig.clientID) {
    return null;
  }

  return new OAuth2Strategy(passportConfig, async (request, accessToken, refreshToken, profile, done) => {
    const user = await users.findOrCreateUser(
      profile.displayName,
      'google',
      profile.id,
      profile.emails[0].value,
    );

    return done(null, user);
  });
};

module.exports = { create };
