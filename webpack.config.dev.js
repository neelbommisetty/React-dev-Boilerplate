const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/app',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
    // js
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'client'),
      },
      // CSS
      {
        test: /\.s[a|c]ss$/,
        include: path.join(__dirname, 'client'),
        loader: 'style-loader!css-loader!sass-loader',
      },
    ],
  },
};
