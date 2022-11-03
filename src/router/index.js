import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../components/Home')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../components/Login')
    },
    {
        path: '/mentor-register',
        name: 'mentor-register',
        component: () => import('../components/mentor/Register')
    },
    {
        path: '/mentee-register',
        name: 'mentee-register',
        component: () => import('../components/mentee/Register')
    },
    {
        path: '/career',
        name: 'career',
        component: () => import('../components/Career')
    },
    {
        path: '/mentor-profile',
        name: 'mentor-profile',
        component: () => import('../components/mentor/Profile')
    },
    {
        path: '/view',
        name: 'view',
        component: () => import('../components/TestList')
    },
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router