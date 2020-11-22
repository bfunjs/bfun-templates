import Vue from 'vue';
import Router from 'vue-router';

import App from './App.vue';
import RouteA from './pages/RouteA.vue';
import RouteB from './pages/RouteB.vue';

Vue.config.productionTip = false;
Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'RouteA',
            path: '/',
            component: RouteA
        },
        {
            name: 'RouteB',
            path: '/route',
            component: RouteB
        }
    ]
});

export function createApp(ssrContext) {
    const app = new Vue({
        router,
        ssrContext,
        render: h => h(App)
    });
    return { app, router };
}
