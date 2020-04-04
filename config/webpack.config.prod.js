const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: ['@babel/polyfill', './src/index.js'],
    vendor: ['gsap'],
  },
  output: {
    filename: 'static/js/[name]-[hash].js',
    path: path.resolve(__dirname, '../build'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: { outputPath: 'static/img/' },
          },
        ],
      },
      {
        test: /\.(webm|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: { outputPath: 'static/videos/' },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'public/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
};
