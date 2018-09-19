const path = require('path');

module.exports = {
  entry: {
    index: './src/index/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js'
  },
  mode: "development",
  devtool: 'inline-source-map',
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)
    modules: [
      "node_modules"
      // path.resolve(__dirname, "src")
    ]
  },
  module: {
    rules: [
      {
        test: /\.*components\/.*\.js$/,
        use: {
          loader: "babel-loader",
          options: {presets: ['@babel/preset-env']}
        }
      }
    ]
  }
};
