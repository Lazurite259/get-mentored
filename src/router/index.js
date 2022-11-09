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
        path: '/mentor-login',
        name: 'mentor-login',
        component: () => import('../components/mentor/Login'),
        meta: { guest: true },
    },
    {
        path: '/mentee-login',
        name: 'mentee-login',
        component: () => import('../components/mentee/Login'),
        meta: { guest: true },
    },
    {
        path: '/mentor-register',
        name: 'mentor-register',
        component: () => import('../components/mentor/Register'),
        meta: { guest: true },
    },
    {
        path: '/mentee-register',
        name: 'mentee-register',
        component: () => import('../components/mentee/Register'),
        meta: { guest: true },
    },
    {
        path: '/career',
        name: 'career',
        component: () => import('../components/Career'),
        meta: { guest: true },
    },
    {
        path: '/mentor-profile',
        name: 'mentor-profile',
        component: () => import('../components/mentor/Profile'),
        meta: { requiresAuth: true },
    },
    {
        path: '/mentee-profile',
        name: 'mentee-profile',
        component: () => import('../components/mentee/Profile'),
        meta: { requiresAuth: true },
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
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem("jwt") == null) {
            next("/mentor-login")
            return
        }
        next()
    } else {
        next()
    }
})
export default router