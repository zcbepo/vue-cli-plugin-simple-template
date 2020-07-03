module.exports = (api) => {
    api.extendPackage({
        dependencies: {
            'axios': '^0.19.2',
            'element-ui': '^2.4.5'
        },
        scripts: {
            'serve:uat': 'vue-cli-service serve --mode=uat',
            'serve:prod': 'vue-cli-service serve --mode=production',
            'build:uat': 'vue-cli-service build --mode=uat'
        }
    })

    api.render('./template')

    api.onCreateComplete(() => {
        const fs = require('fs')
        fs.unlinkSync('./src/assets/logo.png')
        fs.unlinkSync('./src/components/HelloWorld.vue')
        fs.unlinkSync('./src/views/Home.vue')
        fs.unlinkSync('./src/views/About.vue')
    })
}