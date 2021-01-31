import Vue from 'vue'
import Router from 'vue-router'
import ErrorPage from '../components/ErrorPage'
import repertory from './repertory'
import Layout from '../pages/layouts/Layout'
import active from './active'
import Index from '../components/Index'
import advertising from './advertising'
import goods from './goods'
import market from './market'
import cms from './cms'
import order from './order'
import afterSale from './afterSale'
import leader from './leader'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Layout,
      redirect: 'index',
      children: [
        active, repertory, advertising, goods, market, cms, order, afterSale, leader,
        {
          path: 'index',
          name: 'home',
          component: Index
        }
      ]
    },
    {
      path: '*',
      component: Layout,
      redirect: '/error',
      children: [
        {
          path: '/error',
          component: ErrorPage
        }
      ]
    }
  ]
})
