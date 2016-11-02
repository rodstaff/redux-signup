import path from 'path';
import webpack from 'webpack';

export default {
  devtools: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js')
  ],
  output: {
  	path: '/',
    publicPath: '/',
    filename: 'bundle.js'   // I added this myself
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
  	loaders: [
      {
      	test: /\.js$/,
      	include: path.join(__dirname, 'client'),
      	loaders: ['babel']
      }
  	]
  },
  resolve: {
  	extensions: ['', '.js']
  }
}