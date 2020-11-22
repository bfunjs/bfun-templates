const { cleanDir, copyDir, packDir, exec } = require('./utils');

const tasks = [
    // bfun 官方模板
    { func: packDir, args: [ 'src/bfun/component', 'dist/bfun-component.tar' ] },
    { func: packDir, args: [ 'src/bfun/template', 'dist/bfun-template.tar' ] },
    { func: packDir, args: [ 'src/bfun/solution', 'dist/bfun-solution.tar' ] },
    { func: packDir, args: [ 'src/bfun/plugin', 'dist/bfun-plugin.tar' ] },

    // 单页Vue
    { func: packDir, args: [ 'src/vue/basic', 'dist/vue-basic.tar' ] },
    { func: packDir, args: [ 'src/vue/pages/server-side-render', 'dist/vue-page-ssr.tar' ] },
    { func: packDir, args: [ 'src/vue/pages/static-page', 'dist/vue-page-static.tar' ] },

    // 多页VueDemo
    { func: copyDir, args: [ 'src/vue/multi', 'dist/vue-multi-1' ] },
    { func: copyDir, args: [ 'src/vue/pages/static-page', 'dist/vue-multi-1/src/initial' ] },
    { func: packDir, args: [ 'dist/vue-multi-1', 'dist/vue-multi-with-static-page.tar', true ] },

    // 多页VueDemo
    { func: copyDir, args: [ 'src/vue/multi', 'dist/vue-multi-2' ] },
    { func: copyDir, args: [ 'src/vue/pages/server-side-render', 'dist/vue-multi-2/src/initial' ] },
    { func: packDir, args: [ 'dist/vue-multi-2', 'dist/vue-multi-with-ssr-page.tar', true ] },
];

const dist = 'dist';
cleanDir(dist).then(() => exec(tasks));