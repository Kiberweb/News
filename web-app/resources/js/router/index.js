import Vue from 'vue';
import Router from 'vue-router';
import Layout from '../layout';

Vue.use(Router);

export const constantRoutes = [
    {
        path: '',
        component: Layout,
        redirect: 'dashboard',
        children: [
            {
                path: 'dashboard',
                component: () => import('../views/dashboard/index'),
                name: 'Dashboard',
                meta: {
                    title: 'Dashboard'
                },
            }
        ],
    },
    {
        path: '/post/:name',
        component: () => import('../views/posts'),
        name: 'Posts',
        meta: {
            title: 'Post page',
        },
    },
    {
        path: '/post/hashtag/:name',
        component: () => import('../views/posts/PostHashtag'),
        name: 'Posts',
        meta: {
            title: 'Post page',
        },
    },
];

const createRouter = () => new Router({
    // mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    base: process.env.MIX_APP_PATH,
    routes: constantRoutes,
});

const router = createRouter();

export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher;
}

export default router;
