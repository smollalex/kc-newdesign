const version = 'desktop';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config =  {

  entry: {
    common: `./src/js/${version}/common.js`,
    home: `./src/js/${version}/pages/home.js`,
    card: `./src/js/${version}/pages/product.js`,
    category: `./src/js/${version}/pages/category.js`,
    style: `./src/scss/${version}.scss`
  },

  output: {
    path: path.resolve(__dirname, `dist/${version}`),
    filename: 'js/[name].js'
  },
 
  devServer: {
    contentBase: path.resolve(__dirname, `dist/${version}`),
    overlay: true,
    port: 9000
  },
 
  module: {
    rules: [

      // JS
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: '/node_modules/'
      },

      // CSS
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: "css-loader",
            options: { 
              url: false
            } 
          }]
        })
      },

      // SCSS
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                minimize: true,
                url: false
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                url: false
              }
            }
          ]
        })
      },

      // Images
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]'
            }
          }
        ],
      },

      // Fonts
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

      // Pug
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
            options: { pretty: true }
          }
        ]
      }
    ]
  },

  plugins: [
    

    new ExtractTextPlugin({
      filename: 'css/style.css',
      allChunks: true,
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `src/templates/${version}/index.pug`
    }),
    
    new HtmlWebpackPlugin({
      filename: 'product.html',
      template: `src/templates/${version}/product.pug`
    }),
    
    new HtmlWebpackPlugin({
      filename: 'category.html',
      template: `src/templates/${version}/category.pug`
    }),

    

    new CopyWebpackPlugin([
      {
        from: './src/fonts',
        to: './fonts'
      },
      {
        from: './src/webfonts',
        to: './webfonts'
      },
      {
        from: './src/favicon',
        to: './favicon'
      },
      {
        from: './src/img',
        to: './img'
      }
    ]),
 
  ]
};


 
module.exports = (env, argv) => {

  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }

  if (argv.mode === 'production') {
    
  }

  return config;
};