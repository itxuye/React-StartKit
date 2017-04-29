const consts = require('./utils/consts')
const config = require('./utils/base.config')
const webpack = require('webpack')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const path = require('path')


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    contentBase: consts.SRC,
    port: consts.PORT
  },
  entry: path.resolve(consts.ENTRY),
  output: {
    path: path.resolve(consts.DIST),
    publicPath: '/',
    filename: '[id].[hash].js'
  },
  performance: config.performance,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: {importLoaders: 1}},
          'postcss-loader',
          'less-loader'
        ]
      },
      ...config.module.rules
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // new webpack.ProvidePlugin({ $: "jquery" }),
    new OpenBrowserPlugin({
      url: `http://localhost:${consts.PORT}`
    }),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
    }),
    ...config.plugins
  ],
  resolve: config.resolve
}
