const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.[contenthash].js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.[contenthash].css'
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  },
  optimization: {
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()]
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      },

      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },

      {
        test: /\.(jpg|png|gif|svg|webp)$/,
        loader: 'image-webpack-loader',
        enforce: 'pre'
      },
      {
        test: /\.(jpg|png|gif|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          }
        ]
      }
    ]
  }
};
