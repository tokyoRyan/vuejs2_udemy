import Vue from 'vue'
import VueRouter from 'vue-router'
import Portfolio from './views/Portfolio'
import Stocks from './views/Stocks'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Portfolio},
  {path: '/portfolio', component: Portfolio},
  {path: '/stocks', component: Stocks},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
