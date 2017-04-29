const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './index.js'
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
    library: 'react-splitter-layout',
    libraryTarget: 'umd'
  },
  externals: {
    react: 'react'
  }
};
