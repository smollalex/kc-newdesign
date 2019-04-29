const version = 'desktop';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config =  {

  entry: {
    app: `./src/js/${version}/app.js`,
  },

  output: {
    path: path.resolve(__dirname, `dist/${version}`),
    filename: 'js/[name].js'
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


    /* 
    
    

    new HtmlWebpackPlugin({
      filename: 'product.html',
      template: `src/templates/${version}/product.pug`
    }),
    

    new HtmlWebpackPlugin({
      filename: '404.html',
      template: `src/templates/${version}/404.pug`
    }),
    
    new HtmlWebpackPlugin({
      filename: 'index2.html',
      template: `src/templates/${version}/index2.pug`
    }),
    
   

    new HtmlWebpackPlugin({
      filename: 'personal.html',
      template: `src/templates/${version}/personal.pug`
    }),
    
    
    new HtmlWebpackPlugin({
      filename: 'category2.html',
      template: `src/templates/${version}/category2.pug`
    }),
    
    new HtmlWebpackPlugin({
      filename: 'fitting.html',
      template: `src/templates/${version}/fitting.pug`
    }),
    

     new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `src/templates/${version}/index.pug`
    }),

    new HtmlWebpackPlugin({
      filename: 'delivery.html',
      template: `src/templates/${version}/delivery.pug`
    }),
    
    new HtmlWebpackPlugin({
      filename: 'payment.html',
      template: `src/templates/${version}/payment.pug`
    }),
    
    new HtmlWebpackPlugin({
      filename: 'refund.html',
      template: `src/templates/${version}/refund.pug`
    }),
    
    new HtmlWebpackPlugin({
      filename: 'tracking.html',
      template: `src/templates/${version}/tracking.pug`
    }),
    
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: `src/templates/${version}/about.pug`
    }),

    new HtmlWebpackPlugin({
      filename: 'about-newsandtrends.html',
      template: `src/templates/${version}/about-newsandtrends.pug`
    }),

    new HtmlWebpackPlugin({
      filename: 'about-sale.html',
      template: `src/templates/${version}/about-sale.pug`
    }),
    new HtmlWebpackPlugin({
      filename: 'about-certification.html',
      template: `src/templates/${version}/about-certification.pug`
    }),
    new HtmlWebpackPlugin({
      filename: 'about-offer.html',
      template: `src/templates/${version}/about-offer.pug`
    }),
    new HtmlWebpackPlugin({
      filename: 'about-promo.html',
      template: `src/templates/${version}/about-promo.pug`
    }),
    new HtmlWebpackPlugin({
      filename: 'about-testimonials.html',
      template: `src/templates/${version}/about-testimonials.pug`
    }),
    
    new HtmlWebpackPlugin({
      filename: 'about-partners.html',
      template: `src/templates/${version}/about-partners.pug`
    }),
    new HtmlWebpackPlugin({
      filename: 'about-contacts.html',
      template: `src/templates/${version}/about-contacts.pug`
    }),
    new HtmlWebpackPlugin({
      filename: 'about-vacantion.html',
      template: `src/templates/${version}/about-vacantion.pug`
    }),
    
    */

    new HtmlWebpackPlugin({
      filename: 'personal.html',
      template: `src/templates/${version}/personal.pug`
    }),
    
 
    new HtmlWebpackPlugin({
      filename: 'category.html',
      template: `src/templates/${version}/category.pug`
    }),
    
    new HtmlWebpackPlugin({
      filename: 'cart1.html',
      template: `src/templates/${version}/cart1.pug`
    }),
    
    new HtmlWebpackPlugin({
      filename: 'cart2.html',
      template: `src/templates/${version}/cart2.pug`
    }),

    new HtmlWebpackPlugin({
      filename: 'cart3.html',
      template: `src/templates/${version}/cart3.pug`
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