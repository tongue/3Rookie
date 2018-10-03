const path = require('path')

const isStyleguide = typeof process.env.STYLEGUIDE !== 'undefined'

module.exports = {

  entry: isStyleguide ? './styleguide/client.js' : './src/client.js',

  output: {
    filename: 'bundle.js',
  },

  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
    }, {
      test: /\.(scss|css)$/,
      use: [{ loader: 'style-loader'}, { loader: 'css-loader'}, { loader: 'sass-loader', options: {
        data: '@import "theme";',
        includePaths: [
          path.resolve(__dirname, "./styleguide/")
        ]
      }, }],
    }],

  },


  resolve: {
    alias: {
      'rookie-styleguide': path.join(__dirname, './styleguide'),
    },
  },

  devServer: {
    contentBase: isStyleguide ? 'styleguide/' : 'src/',
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        secure: false
      }
    }

  },

  devtool: 'cheap-module-eval-source-map',

}
