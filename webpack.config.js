const path = require('path'); // Import the path module
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
  mode: 'production',
  entry: './src/index.js', // Entry point for the application
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js'
  },
  module: {
    rules: [
      
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/i, 
        use: [
          {
            loader: 'url-loader', // or 'file-loader' if you want to output images to a specific folder
            options: {
              limit: 8192, // in bytes, images below this size will be converted to a data URL
              name: '[name].[hash:7].[ext]',
              outputPath: 'images/', // images will be saved in 'dist/images/'
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65, // Adjust quality for jpeg images
              },
              optipng: {
                enabled: true,
                optimizationLevel: 5, // Adjust optimization level
              },
              pngquant: {
                quality: [0.65, 0.9], // Set quality for png images
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
                optimizationLevel: 3,
              },
              webp: {
                quality: 75, // Quality of webp images
              },
            },
          },

          

          
         
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors', // Name for the vendor chunk
          chunks: 'all',
        },
      }, // Split code for all chunks (async and initial)
    },
    usedExports: true, // Tree-shaking for unused exports
    minimize: true, // Minify the output
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // This will remove console.log statements
          },
        },
      }),
    ], // Specify the minimizer
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Template for the index.html file
    filename: 'index.html',// Template for the index.html file
    }),
  ],
 
 
 
};












