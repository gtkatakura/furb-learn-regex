const convict = require('convict');

require('dotenv').config();

const config = convict({
  http: {
    port: {
      doc: 'The port to listen on',
      default: 3000,
      env: 'PORT',
    },
  },
  authentication: {
    google: {
      clientId: {
        doc: 'The Client ID from Google to use for authentication',
        default: '',
        env: 'GOOGLE_CLIENTID',
      },
      clientSecret: {
        doc: 'The Client Secret from Google to use for authentication',
        default: '',
        env: 'GOOGLE_CLIENTSECRET',
      },
    },
    facebook: {
      clientId: {
        doc: 'The Client ID from Facebook to use for authentication',
        default: '',
        env: 'FACEBOOK_CLIENTID',
      },
      clientSecret: {
        doc: 'The Client Secret from Facebook to use for authentication',
        default: '',
        env: 'FACEBOOK_CLIENTSECRET',
      },
    },
    token: {
      secret: {
        doc: 'The signing key for the JWT',
        default: 'mySuperSecretKey',
        env: 'JWT_SIGNING_KEY',
      },
      issuer: {
        doc: 'The issuer for the JWT',
        default: 'furb-learn-regex',
      },
      audience: {
        doc: 'The audience for the JWT',
        default: 'furb-learn-regex',
      },
    },
  },
  mongodb: {
    uri: {
      doc: 'The URI from MongoDB',
      default: 'mongodb://localhost/LearnREGEX',
      env: 'MONGODB_URI',
    },
  },
});

config.validate();

module.exports = config;
