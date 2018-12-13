let path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('base', resolve('src/components/base'))
            .set('components', resolve('src/components'))
    }
}
