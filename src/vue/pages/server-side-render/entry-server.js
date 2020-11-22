import { createApp } from './index';

export default context => {
    return new Promise(resolve => {
        const { app, router } = createApp(context);
        router.push(context.url);
        router.onReady(() => {
            resolve(app);
        });
    });
};
