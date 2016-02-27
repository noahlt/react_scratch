module.exports = {
  entry: './code.js',
  output: {
    filename: 'assets/bundle.min.js',
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
