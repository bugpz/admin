import Vue from 'vue'
import Router from 'vue-router'
import ErrorPage from '../components/ErrorPage'
import repertory from './repertory'
import Layout from '../pages/layouts/Layout'
import Index from '../components/Index'
import active from './active'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    repertory,
    active,
    {
      path: '/',
      name: 'index',
      component: Layout,
      redirect: 'index'
    },
    {
      path: '*',
      name: 'error',
      component: Layout,
      redirect: '*',
      children: [
        {
          path: 'index',
          name: 'index',
          component: Index,
          meta: {title: '首页'}
        },
        {
          path: '*',
          name: 'error',
          component: ErrorPage
        }
      ]
    }
  ]
})
