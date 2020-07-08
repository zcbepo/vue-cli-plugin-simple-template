module.exports = (api) => {
    api.render('./template')

    api.extendPackage({
        dependencies: {
            'vue-router': '^3.3.4',
            'vuex': '^3.5.1',
            'axios': '^0.19.2',
            'element-ui': '^2.4.5'
        },
        scripts: {
            'serve:uat': 'vue-cli-service serve --mode=uat',
            'serve:prod': 'vue-cli-service serve --mode=production',
            'build:uat': 'vue-cli-service build --mode=uat'
        }
    })

    api.onCreateComplete(() => {
        const fs = require('fs')
        const helloWorldComp = './src/components/HelloWorld.vue'
        const homePage = './src/views/Home.vue'
        if (fs.existsSync(helloWorldComp)) {
            fs.unlinkSync(helloWorldComp)
        }
        if (fs.existsSync(homePage)) {
            fs.unlinkSync(homePage)
        }
    })
}