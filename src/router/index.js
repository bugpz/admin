import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import layout from "../layouts/layout";
import U_error from "../components/U_error";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: layout
    },
    {
      path: '/h',
      name: 'hw',
      component: HelloWorld
    },
    {
      path: '*',
      name: 'error',
      component: U_error
    }
  ]
})
