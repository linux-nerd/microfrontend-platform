const { merge } = require('webpack-merge');
const HtmlWelpackPlugin = require('html-webpack-plugin');
const path = require('path');

const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8082,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  output: {
    filename: 'main.js'
  },
  plugins: [
    new HtmlWelpackPlugin({
      template: './public/index.html'
    })  
  ]
}

module.exports = merge(commonConfig, devConfig);

