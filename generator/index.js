module.exports = (api) => {
    api.extendPackage({
        dependencies: {
            'axios': '^0.19.2',
            'element-ui': '^2.4.5'
        }
    })

    api.render('./template')
}