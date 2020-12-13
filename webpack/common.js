const path = require('path');

const paths = {
  root: `${__dirname}/..`,
  client: `${__dirname}/../client`,
  dist: `${__dirname}/../dist`,
};

module.exports = {
  paths,
  loaders: {
    html: {
      template: `${paths.client}/index.html`,
      favicon: `${paths.client}/favicon.ico`,
      filename: 'index.html',
      inject: 'body',
    },
  },
  rules: {
    style: {
      test: /\.(css|less)$/,
      use: {
        fallback: 'style-loader',
        use: ['css-loader', 'less-loader'],
      },
    },
  },
  shared: {
    entry: [
      'babel-polyfill',
      'normalize-css',
      `${paths.client}/index`,
    ],
    output: {
      path: paths.dist,
      filename: 'main.js',
    },
    module: {
      rules: [
        { test: /\.(js|tsx?)$/, loader: 'babel-loader', exclude: /node_modules/ },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
        { test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000' },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
        { test: /\.png(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/png' },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
      modules: [
        path.resolve('./client'),
        path.resolve('./shared'),
        path.resolve('./node_modules'),
      ],
    },
  },
};
