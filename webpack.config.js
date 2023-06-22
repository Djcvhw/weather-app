const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry:   [ '@babel/polyfill', './src/index.js' ],
  output:  {
    path:       path.resolve(__dirname, 'build/source'),
    filename:   '[name].[hash].js',
  },
  devServer: {
    host: '0.0.0.0',
    port:               9000,
    hot:                true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test:    /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:     [ 'babel-loader' ],
      },

      {
        test: /\.css$/,
        use:  [ 'style-loader', 'css-loader' ],
      },
      {
        test:   /\.(png|jpg|gif|jfif|mp3)$/,
        loader: 'url-loader',
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)$/,
        use:  [ 'file-loader?name=fonts/[name].[ext]' ],
      },
      {
        test:   /\.svg$/,
        loader: 'svg-sprite-loader',
      }
    ],
  },
  resolve: {
    extensions: [ '*', '.js', '.jsx' ],
    fallback: {
      "fs": false,
      "path": false,
    },
  },
  optimization: {
    minimizer: [ new TerserPlugin() ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title:    'Weather app',
    }),
  ],
};
