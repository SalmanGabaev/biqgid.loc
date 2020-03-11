import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '@pages/home/Home';
import Register from '@pages/auth/Register';
import Login from '@pages/auth/Login';

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },

        {
            path: '/register',
            name: 'register',
            component: Register,
        },

        {
            path: '/login',
            name: 'login',
            component: Login,
        },
    ],
});

export default router;
