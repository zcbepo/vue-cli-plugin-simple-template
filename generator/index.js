module.exports = (api) => {
    api.extendPackage({
        dependencies: {
            'axios': '^0.19.2',
            'element-ui': '^2.4.5'
        }
    })

    api.injectImports(api.injectImports('src/main.js', `import axios from 'axios'`))
}