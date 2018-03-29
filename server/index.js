const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('./config');
const webpackConfig = require('../webpack/development');

const app = express();
const compiler = webpack(webpackConfig);
const port = config.get('http.port');

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler));

app.use((request, response, next) => {
  require('./routes/authentication')(request, response, next);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
