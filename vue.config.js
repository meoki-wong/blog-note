
const { name } = require('./package.json')
const { resolve } = require('path')
module.exports = {

    configureWebpack: {
        resolve: {
            alias: {
              '@': resolve(__dirname, 'src')
            }
          },
        output: {
            library: `${name}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${name}`,
          }
    },

    devServer: {
        port: 8091,
        headers: { 'Access-Control-Allow-Origin': '*' },
        hot: true,
        open: true,
        inline: true
    }
}