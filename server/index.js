const express = require('express');
const favicon = require('serve-favicon');

const config = require('./config');

const createServer = (path, { app = express() } = {}) => {
  const port = config.get('http.port');

  app.use((request, response, next) => {
    require('./routes')(request, response, next);
  });

  app.use(favicon(`${path}/favicon.ico`));
  app.use(express.static(path));

  const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });

  const io = require('socket.io')(server);
  app.io = io;

  return { app, server };
};

module.exports = { createServer };
