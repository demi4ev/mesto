const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/pages/index.js'
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.[hash].js',
    publicPath: '',
    assetModuleFilename: 'images/[name][ext]'
  },

  devtool: 'cheap-module-source-map',

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true
  },

  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.js$/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource'

      }
    ]
  }


}
