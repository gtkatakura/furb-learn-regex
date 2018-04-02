const { ExtractJwt, Strategy } = require('passport-jwt');

const create = ({ config, users }) => {
  const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.get('authentication.token.secret'),
    issuer: config.get('authentication.token.issuer'),
    audience: config.get('authentication.token.audience'),
  };

  return new Strategy(jwtOptions, async (payload, done) => {
    const user = await users.find(payload.sub);

    if (user) {
      return done(null, user, payload);
    }

    return done();
  });
};

module.exports = { create };
