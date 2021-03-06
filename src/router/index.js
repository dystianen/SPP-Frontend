import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'dashboard',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
  },
  {
    path: '/icons',
    name: 'icons',
    component: () => import('@/views/icons/Icons.vue'),
  },
  {
    path: '/student',
    name: 'student',
    component: () => import('@/views/pages/Student.vue'),
  },
  {
    path: '/class',
    name: 'class',
    component: () => import('@/views/pages/Kelas.vue'),
  },
  {
    path: '/operator',
    name: 'petugas',
    component: () => import('@/views/pages/Petugas.vue'),
  },
  {
    path: '/spp',
    name: 'spp',
    component: () => import('@/views/pages/SPP.vue'),
  },
  {
    path: '/pembayaran',
    name: 'pembayaran',
    component: () => import('@/views/pages/Pembayaran.vue'),
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('@/views/pages/History.vue'),
  },
  {
    path: '/pages/login',
    name: 'pages-login',
    component: () => import('@/views/pages/Login.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/pages/register',
    name: 'pages-register',
    component: () => import('@/views/pages/Register.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/Error.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '*',
    redirect: 'error-404',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
