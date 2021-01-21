module.exports = {
    plugins: {
        'postcss-px-to-viewport': {
            unitToConvert: 'px',
            viewportWidth: 375,
            viewportHeight: 667,
            unitPrecision: 5,
            viewportUnit: 'vw',
            selectorBlackList: [],
            minPixelValue: 1,
            exclude: [/tabbar/]
        }
    }
}
