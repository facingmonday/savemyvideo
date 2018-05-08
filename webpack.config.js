const webpack = require('webpack');
const path = require('path');

const dirNode = path.join(__dirname, "node_modules");
const dirApp = path.join(__dirname, 'app');
const dirAssets = path.join(__dirname, 'assets');
const IS_DEV = (process.env.NODE_ENV === 'dev');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './app/app'
  ],
  output: {
    pathinfo: true,
    path: path.join(__dirname, 'server/public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
      extensions: ['.js'],
      alias: {
          '@': __dirname,
          '~': dirApp
      }
  },
  devtool: 'eval-source-map',
  devServer: {
    proxy: {
      "*" : "http://localhost:3100"
    },
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
    //new webpack.NoErrorsPlugin()
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
      },
      // STYLES
      {
          test: /\.css$/,
          use: [
              'style-loader',
              {
                  loader: 'css-loader',
                  options: {
                      sourceMap: IS_DEV
                  }
              },
          ]
      },
      
      {
          test: /\.less$/,
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
              }, {
              loader: "css-loader" // translates CSS into CommonJS
              }, {
              loader: "less-loader" // compiles Less to CSS
          }]
      },

      // IMAGES
      {
          test: /\.(jpe?g|png|gif)$/,
          loader: 'file-loader',
          options: {
              name: '[path][name].[ext]'
          }
      }
    ]
  }
};
