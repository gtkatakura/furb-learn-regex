const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const chokidar = require('chokidar');

const config = require('./webpack/development');
const { createServer } = require('./server');

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler));

const { server } = createServer(`${__dirname}/client`, { app });

server.keepAliveTimeout = 0;

app.use('*', (req, res, next) => {
  const filename = `${compiler.outputPath}/index.html`;

  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
      return next(err);
    }

    res.set('content-type', 'text/html');
    res.send(result);
    res.end();
  });
});

const watcher = chokidar.watch('./server');

watcher.on('ready', () => {
  watcher.on('all', () => {
    console.log('Clearing /server/ module cache from server');

    Object.keys(require.cache).forEach((id) => {
      if (/[/\\]server[/\\]/.test(id)) delete require.cache[id];
    });
  });
});
