const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const consts = require('./consts')
const path = require('path')
const pxtorem = require('postcss-pxtorem')
const autoprefixer = require('autoprefixer')
const svgDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
  path.resolve('src/asset/images'),  // 2. 自己私人的 svg 存放目录
];

const config = {
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.(svg)$/i,
        loader: 'svg-sprite-loader',
        include: svgDirs,  // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
      },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf|woff)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.json$/,
        use: ['json-loader']
      }
    ]
  },
  postcss: [
    pxtorem({
      rootValue: 100,
      propWhiteList: [],
    }),
    require('postcss-font-magician')()
  ],
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function () {
          return [autoprefixer({browsers: [
            'last 10 Chrome versions',
            'last 5 Firefox versions',
            'Safari >= 6', 'ie > 8',
            'Android >= 4.0', 'iOS >= 6']})]
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: consts.TEMPLATE,
      title: consts.TITLE,
      filename: (consts.ENV === 'prod' ? '.' : '') + './index.html',
      hash: true
    })
  ],
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.web.js', '.js', '.jsx', '.html', '.css', '.scss', '.less'],
    /*  alias: {
     'react': 'react-lite',
     'react-dom': 'react-lite'
     }*/
  }
}

module.exports = config
