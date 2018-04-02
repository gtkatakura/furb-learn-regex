const express = require('express');
const favicon = require('serve-favicon');

const config = require('./config');

const createServer = (path, { app = express() } = {}) => {
  const port = config.get('http.port');

  app.use((request, response, next) => {
    require('./routes/authentication')(request, response, next);
  });

  app.use(favicon(`${path}/favicon.ico`));
  app.use(express.static(path));

  const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });

  return { app, server };
};

module.exports = { createServer };
