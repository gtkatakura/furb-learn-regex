const extractFrom = require('../index');

const LIMIT = { MAX: 10 };

const extractFromWithSafeMode = extractFrom.withMiddleware(next => (text, limit) => {
  if (Number.isNaN(limit) || limit < 0) {
    return [];
  }

  return next(text, Math.min(limit, LIMIT.MAX));
});

module.exports = Object.assign(extractFromWithSafeMode, { LIMIT });
