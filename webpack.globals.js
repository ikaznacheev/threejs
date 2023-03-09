const globals = {
    template: './src/index',
    test: './tests/',
    prod: './prod/',
    prodFile: 'gen',
    src: {
        images: 'src/assets/images/',
        static: 'public/',
    },
    files: {
        test: 'test',
        html: 'index.html',
    },
    settings:{
        assetPath: process.env.ASSET_PATH || '',
    }
}

module.exports = globals