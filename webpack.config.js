const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const ENV = process.env.npm_lifecycle_event;

const app = {
  entry: './src/app.js',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src',
    status: 'minimal'
  },
  module: {
    preLoaders: [],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader' 
      },
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      optimize: true
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      inject: 'body'
    })
  ]
};

if (ENV !== 'build') {
  app.plugins.splice(0,1);

  app.module.preLoaders.push({
    test: /\.js$/,
    exclude: [
      /node_modules/,
      /\.spec\.js$/
    ],
    loader: 'isparta-instrumenter'
  });
  app.output = {};
  app.devtool = 'inline-source-map';
}

module.exports = app;
