import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vuetify from 'vuetify'

Vue.use(VueRouter)
Vue.use(Vuetify)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/kurslar',
    name: 'kurslar',
    component: () => import('../views/kurslar.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/panel',
    name: 'Panel',
    component: () => import('../views/Panel.vue')
  },
  {
    path: '/1Haber1',
    name: 'Haber1',
    component: () => import('../views/1Haber1.vue')
  },
  {
    path: '/profil',
    name: 'Profil',
    component: () => import('../views/Profil.vue')
  },
  {
    path: '/Dunya',
    name: 'Dunya',
    component: () => import('../views/Dunya.vue')
  },
  {
    path: '/teknoloji',
    name: 'Teknoloji',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Teknoloji.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
