const { environment } = require('@rails/webpacker')

module.exports = environment

const webpack = require('webpack') //bootstrap,jQuery,popper.jsのインストール設定
  environment.plugins.append(
    'Provide',
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      Popper: ['popper.js', 'default']
    })
  )