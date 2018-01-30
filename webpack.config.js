const path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js'
    , path: path.resolve(__dirname, 'dist')
    , publicPath: "dist"
  }
  , devServer: {
    contentBase: path.join(__dirname, "."),
    compress: true,
    port: 8090
    , historyApiFallback: true
  }
  , devtool: 'source-map'
};