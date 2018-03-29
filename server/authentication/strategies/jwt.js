const { ExtractJwt, Strategy } = require('passport-jwt');

const create = ({ config, users }) => {
  const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.get('authentication.token.secret'),
    issuer: config.get('authentication.token.issuer'),
    audience: config.get('authentication.token.audience'),
  };

  return new Strategy(jwtOptions, (payload, done) => {
    const user = users.find(parseInt(payload.sub, 10));

    if (user) {
      return done(null, user, payload);
    }

    return done();
  });
};

module.exports = { create };
