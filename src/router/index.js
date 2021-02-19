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
import seller from './seller'
import merchantGoods from './merchantGoods'
import cookBook from './cookBook'
import financial from './financial'
import message from './message'
import logistics from './logistics'
import setting from './setting'
import other from './other'
import Login from '../pages/login/login'

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
        active, repertory, advertising, goods, market,
        cms, order, afterSale, leader, seller,
        merchantGoods, cookBook, financial, message, logistics, setting, other,
        {
          path: 'index',
          name: 'home',
          component: Index
        }
      ]
    },
    {
      path: '/login',
      component: Login
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
