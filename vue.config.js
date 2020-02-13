module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: '@import "@/assets/css/variables.scss";'
            }
        }
    },
    publicPath: './',
    productionSourceMap: false,
}