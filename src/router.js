import Vue from 'vue';
import Router from 'vue-router';

import Start from '@/views/Start.vue';
import Results from '@/views/Results.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: { name: 'start' },
        },

        {
            name: 'start',
            path: '/start',
            component: Start,
            meta: {
                title: 'На старт!',
            },
        },

        {
            name: 'user',
            path: '/user/:id',
            component: Results,
            meta: {
                title: 'Результат',
            },
        },
    ],
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;

    // if (to.matched.some(record => record.name === 'results')) {
    //     if (!store.getters['results/fetchedUser']) return next({ name: 'start' });
    // }

    return next();
});

export default router;
