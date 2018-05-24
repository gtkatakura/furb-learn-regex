const compose = require('./compose');

const defaultMiddleware = next => (...args) => next(...args);

const applyMiddlewares = (middlewares, func) => compose(...middlewares)(func);

const recursive = (func, middlewares = [defaultMiddleware]) => {
  const wrapper = applyMiddlewares(
    middlewares,
    func((...args) => wrapper(...args)),
  );

  const withMiddleware = middleware => recursive(func, [...middlewares, middleware]);

  return Object.assign(wrapper, { withMiddleware });
};

module.exports = recursive;
