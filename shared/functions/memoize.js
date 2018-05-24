const { hasOwnProperty } = Object.prototype;

const memoize = func => {
  const cache = {};

  return (...args) => {
    const key = JSON.stringify(args);

    if (!hasOwnProperty.call(cache, key)) {
      cache[key] = func(...args);
    }

    return cache[key];
  };
};

module.exports = memoize;
