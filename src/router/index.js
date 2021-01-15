import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import layout from '../layouts/layout'
import ErrorPage from '../components/ErrorPage'
import Index from '../components/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: layout,
      redirect: '/index',
      children: [
        {
          path: 'index',
          name: 'index',
          component: Index
        },
        {
          path: 'h',
          name: 'hw',
          component: HelloWorld
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
