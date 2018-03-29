const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const merge = require('lodash/merge');

const { shared, loaders, rules } = require('./common');

module.exports = merge(shared, {
  devtool: 'cheap-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    ...shared.entry,
  ],
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      ...shared.module.rules,
      merge(rules.style, {
        use: [
          rules.style.use.fallback,
          ...rules.style.use.use,
        ],
      }),
    ],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlPlugin(loaders.html),
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true,
    open: true,
    inline: true,
  },
});
