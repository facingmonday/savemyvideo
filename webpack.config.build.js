const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './app/app',
  output: {
    path: path.join(__dirname, 'server/public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js']
  },
  devtool: 'source-map',
  plugins: [
    //new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ],
  module: {
    loaders: [
      {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /(node_modules)/,
          options: {
              ///compact: true,
              presets: ['es2015', 'react'], 
              "plugins": ["transform-class-properties"]
          }
      }
    ]
  }
};