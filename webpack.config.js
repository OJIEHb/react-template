const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ProgressPlugin } = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    main: '@sources/index.js',
    style: '@styles/index.scss'
  },
  output: {
    publicPath: '/',
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: [ 'babel-loader' ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.html$/,
        use: [ 'html-loader' ]
      },
    ]
  },
  resolve: {
    alias: {
      ['@sources']: path.resolve(__dirname, 'src'),
      ['@reducers']: path.resolve(__dirname, 'src/store/reducers'),
      ['@actions']: path.resolve(__dirname, 'src/store/actions'),
      ['@constants']: path.resolve(__dirname, 'src/store/constants'),
      ['@styles']: path.resolve(__dirname, 'src/styles'),
      ['@components']: path.resolve(__dirname, 'src/components'),
      ['@containers']: path.resolve(__dirname, 'src/containers'),
      ['@services']: path.resolve(__dirname, 'src/services'),
    },
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new Dotenv(),
    new ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      favicon: path.resolve(__dirname, 'public/favicon.ico'),
    })
  ]
};
