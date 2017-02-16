const path = require('path');
var paths = require('../config/paths');
var autoprefixer = require('autoprefixer');

module.exports = {
  resolve: {
    alias: {
      "~": paths.appSrc
    }
  },
  module: {
    loaders: [
      // "postcss" loader applies autoprefixer to our CSS.
      // "css" loader resolves paths in CSS and adds assets as dependencies.
      // "style" loader turns CSS into JS modules that inject <style> tags.
      // In production, we use a plugin to extract that CSS to a file, but
      // in development "style" loader enables hot editing of CSS.
      {
        test: /\.css$/,
        loader: `style!css?importLoaders=1&modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss`
      },
      // "file" loader for svg
      {
        test: /\.svg$/,
        loader: 'file',
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  postcss: function() {
    return [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9', // React doesn't support IE8 anyway
        ]
      })
    ];
  }
};