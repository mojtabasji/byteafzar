import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeContent.vue';


const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/articles/:slug',
            name: 'Article',
            component: () => import('../views/Article.vue'),
        },
    ]
});

export default routes;
