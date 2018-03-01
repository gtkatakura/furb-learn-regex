const paths = {
  root: `${__dirname}/..`,
  src: `${__dirname}/../src`,
  dist: `${__dirname}/../dist`,
};

module.exports = {
  paths,
  loaders: {
    html: {
      template: `${paths.src}/index.html`,
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
      `${paths.src}/index`,
    ],
    output: {
      path: paths.dist,
      filename: 'main.js',
    },
    module: {
      rules: [
        { test: /.js$/, loader: 'babel-loader', exclude: /node_modules/ },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
        { test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000' },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
        { test: /\.png(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/png' },
      ],
    },
  },
};
