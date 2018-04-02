const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const merge = require('lodash/merge');

const {
  shared,
  paths,
  loaders,
  rules,
} = require('./common');

module.exports = merge(shared, {
  devtool: 'source-map',
  output: {
    filename: '[name]-[hash].js',
  },
  module: {
    rules: [
      ...shared.module.rules,
      merge(rules.style, {
        use: ExtractTextPlugin.extract(rules.style.use),
      }),
    ],
  },
  plugins: [
    new CleanPlugin(['dist'], {
      root: paths.root,
    }),
    new ExtractTextPlugin({
      filename: 'styles-[hash].css',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new HtmlPlugin(merge(loaders.html, {
      minify: { collapseWhitespace: true },
    })),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
  ],
});
