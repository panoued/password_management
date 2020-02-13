import Vue from 'vue';
import VueRouter from 'vue-router';
import Blank from '@/views/Blank.vue';
import Login from '@/views/auth/Login.vue';
import Home from '@/views/home/Home.vue';
import HomePage from '@/views/home/HomePage.vue';
import Conversation from '@/views/home/Conversation.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'blank',
        component: Blank
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '/',
                name: 'homepage',
                component: HomePage
            },
            {
                path: '/conversation',
                name: 'conversation',
                component: Conversation
            }
        ]
    }
];

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
