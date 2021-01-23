import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import layout from '../pages/layouts/Layout'
import ErrorPage from '../components/ErrorPage'
import Index from '../components/Index'
import repertory from './repertory'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    repertory,
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
          name: '平台优惠券管理',
          component: HelloWorld,
          meta: {title: '平台优惠券'},
          children: [
            {
              path: 'www',
              name: '测试',
              component: ErrorPage,
              meta: {title: '第二层'}
            }
          ]
        }
      ]
    },
    {
      path: '*',
      name: 'error',
      component: layout,
      redirect: '*',
      children: [
        {
          path: '*',
          name: 'error',
          component: ErrorPage
        }
      ]
    }
  ]
})
