module.exports = {
    chainWebpack: config => {
        config.plugin('define').tap(([options = {}]) => {
            return [{
                ...options,
                VERSION: JSON.stringify(require('./package.json').version)
            }]
        })
    }
};