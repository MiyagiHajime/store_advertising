const { environment } = require('@rails/webpacker')

module.exports = environment

//BootstrapのjavaScriptをimport,requireなしで使用できるおまじない
const webpack = require('webpack')
environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    Popper: 'popper.js'
  })
)
