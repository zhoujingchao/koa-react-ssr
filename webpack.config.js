const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    `${__dirname}/client/index.js`
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
    }]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(), // 启用 HMR
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    hot: true,
    inline: true,
    host: 'localhost',
    port: 3333,
    contentBase: path.resolve(__dirname, 'dist')
  }
}
