const fs = require('fs')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    host: process.env.VUE_APP_HOST || '0.0.0.0',
    port: process.env.VUE_APP_PORT || '8080',
    open: true,
    disableHostCheck: true,
    hot: true,
    inline: false,
    https: {
      key: fs.readFileSync(resolve('certs/localhost.key'), 'utf8'),
      cert: fs.readFileSync(resolve('certs/localhost.crt'), 'utf8'),
    },
  },
}
