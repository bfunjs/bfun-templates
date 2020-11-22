import Vue from 'vue';
import Router from 'vue-router';

import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: []
});

const app = new Vue({
    router,
    render: h => h(App)
});
app.$mount('#app');

