const helpers = require('./helpers');

const { CheckerPlugin } = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin')

const extractCss = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});

const extractLess = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'main': './src/main.ts'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      lodash: 'lodash-es',
      aphrodite: 'aphrodite/no-important',
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          '@angularclass/hmr-loader',
          'awesome-typescript-loader',
          'angular2-template-loader',
        ],
        exclude: [/\.spec\.ts$/]
      },
      {
        test: /\.(ts|js)$/,
        loaders: [
          'angular-router-loader?loader=system'
        ],
        exclude: [/\.spec\.ts$/]
      },
      // global css
      {
        test: /\.css$/,
        exclude: [helpers.root('src', 'app')],
        loader: extractCss.extract({
          fallback: ['style-loader'],
          use: [{ loader: 'css-loader', options: { sourceMap: true } }]
        })
      },
      {
        test: /\.scss$/,
        loaders: extractSass.extract({
          fallback: ['style-loader'],
          use: [{ loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }]
        })
      },
      {
        test: /\.component\.less$/,
        include: [helpers.root('src', 'app')],
        use: ['raw-loader', 'less-loader']
      },
      {
        test: /\.less$/,
        include: [helpers.root('src', 'app', 'styles')],
        loaders: extractLess.extract({
          fallback: ['style-loader'],
          use: [{ loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'less-loader', options: { sourceMap: true } }]
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CheckerPlugin(),
    new ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('src') // location of your src
    ),
    new CopyWebpackPlugin([
      { from: 'src/assets', to: 'assets' },
      { from: 'src/resources', to: 'resources' },
      { from: 'src/themes', to: 'themes' },
      { from: 'src/help', to: 'help' },
    ]),
    new CommonsChunkPlugin({
      name: ['polyfills', 'vendor'].reverse()
    }),
    extractCss, extractSass, extractLess,
  ],
  node: {
    global: true,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false,
  }
};
