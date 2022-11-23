import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/Home')
  },
  // career
  {
    path: '/career',
    name: 'career',
    component: () => import('../components/Career')
  },
  {
    path: '/career/:id',
    name: 'career-detail',
    component: () => import('../components/CareerDetail')
  },
  // mentor
  {
    path: '/mentor-login',
    name: 'mentor-login',
    component: () => import('../components/mentor/Login'),
    meta: { guest: true }
  },
  {
    path: '/mentor-register',
    name: 'mentor-register',
    component: () => import('../components/mentor/Register'),
    meta: { guest: true }
  },
  {
    path: '/mentor-profile',
    name: 'mentor-profile',
    component: () => import('../components/mentor/Profile'),
    meta: { requiresAuth: true }
  },
  {
    path: '/mentee-profile',
    name: 'mentee-profile',
    component: () => import('../components/mentee/Profile'),
    meta: { requiresAuth: true }
  },
  {
    path: '/career/:id',
    name: 'career-detail',
    component: () => import('../components/CareerDetail')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../components/ContactUs')
  },
  {
    path: '/mentors',
    name: 'mentors',
    component: () => import('../components/mentor/MentorSources')
  },
  {
    path: '/mentor/:id',
    name: 'mentor-detail',
    component: () => import('../components/mentor/MentorDetail'),
    meta: { requiresAuth: true }
  },
  {
    path: '/mentor-forgot-password',
    name: 'mentor-forgot-password',
    component: () => import('../components/mentor/ForgotPassword'),
    meta: { guest: true }
  },
  {
    path: '/mentor-reset-password/:resetToken',
    name: 'mentor-reset-password',
    component: () => import('../components/mentor/ResetPassword')
  },
  // mentee
  {
    path: '/mentee-login',
    name: 'mentee-login',
    component: () => import('../components/mentee/Login'),
    meta: { guest: true }
  },
  {
    path: '/mentee-register',
    name: 'mentee-register',
    component: () => import('../components/mentee/Register'),
    meta: { guest: true }
  },
  {
    path: '/mentee-profile',
    name: 'mentee-profile',
    component: () => import('../components/mentee/Profile'),
    meta: { requiresAuth: true }
  },
  {
    path: '/mentee-forgot-password',
    name: 'mentee-forgot-password',
    component: () => import('../components/mentee/ForgotPassword'),
    meta: { guest: true }
  },
  {
    path: '/mentee-reset-password/:resetToken',
    name: 'mentee-reset-password',
    component: () => import('../components/mentee/ResetPassword')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (window.localStorage.getItem('mentor-jwt') == null && window.localStorage.getItem('mentee-jwt') == null) {
      next('/mentee-login')
      return
    }
    next()
  } else {
    next()
  }
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.guest)) {
    if (window.localStorage.getItem('mentor-jwt') != null) {
      next('/mentor-profile')
      return
    }
    if (window.localStorage.getItem('mentee-jwt') != null) {
      next('/mentee-profile')
      return
    }
    next()
  } else {
    next()
  }
})
export default router
