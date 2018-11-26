const version = 'desktop';

const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');


const config =  {

  entry: `./src/${version}.js`,
  output: {
    path: path.resolve(__dirname, `dist/${version}`),
    filename: `js/${version}.js`,
  },
 
  devServer: {
    contentBase: path.resolve(__dirname, `dist/${version}`),
    overlay: true,
    port: 9000
  },
 
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: "css-loader",
            //options: { url: false } 
          }]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: 'css-loader',
              // если false то строка с url игнорируется и вставляется как есть
              //options: { url: false } 
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img',
              include: path.resolve(__dirname, 'src')
            }
          }
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts'
            }
          }
        ],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: "css/styles.css"
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/templates/desktop/index.pug'
    }),

    //new CopyWebpackPlugin([{ from: 'src/img', to: 'img' }])
  ]
};



module.exports = (env, argv) => {

  if (argv.mode === 'development') {
    config.devtool = 'source-map';
    console.log(argv.mode)
  }

  if (argv.mode === 'production') {
    
  }

  return config;
};