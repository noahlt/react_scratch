var path = require('path');

module.exports = {
  entry: './code.js',
  target: 'web',
  output: {
    filename: 'bundle.min.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};
