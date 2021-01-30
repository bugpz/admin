import ActivityList from '../pages/goods/assembleGoods/activityList/ActivityList'
import BusinessCity from '../pages/goods/assembleGoods/businessCity/BusinessCity'
import CommonModule from '../pages/goods/assembleGoods/commonModule/CommonModule'
import List from '../pages/goods/assembleGoods/list/List'
import ShowClassFY from '../pages/goods/assembleGoods/showClassiFY/ShowClassFY'
import baseGoods from '../pages/goods/baseGoods/index/baseGoods'
import CommonModuleM from '../pages/goods/mallGoods/commonModule/CommonModuleM'
import ListM from '../pages/goods/mallGoods/list/ListM'
import ShowClassFYM from '../pages/goods/mallGoods/showClassify/ShowClassFYM'
import Category from '../pages/goods/propertyMange/category/Category'
import Params from '../pages/goods/propertyMange/params/Params'
import Specs from '../pages/goods/propertyMange/specs/Specs'
import CommonModuleS from '../pages/goods/supplyGoods/commonModule/CommonModuleS'
import ListS from '../pages/goods/supplyGoods/list/ListS'
import ShowClassFYS from '../pages/goods/supplyGoods/showClassify/ShowClassFYS'
import Default from '../pages/Default/Default'

const goods = {
  path: '/goods',
  component: Default,
  redirect: '/goods/index',
  meta: {title: '商品管理', icon: '#i-commodity', layer: 3},
  children: [
    {
      path: 'assembleGoods',
      component: Default,
      meta: {title: '社区团购商品'},
      redirect: 'List',
      children: [
        {
          path: 'activityList',
          component: ActivityList,
          meta: {title: '团购活动管理'}
        },
        {
          path: 'BusinessCity',
          component: BusinessCity,
          meta: {title: '业务城市'}
        },
        {
          path: 'commonModule',
          component: CommonModule,
          meta: {title: '商详通用设置'}
        },
        {
          path: 'List',
          component: List,
          meta: {title: '团购商品'}
        },
        {
          path: 'showClassFY',
          component: ShowClassFY,
          meta: {title: '前端分类展示'}
        }
      ]
    },
    {
      path: 'baseGoods',
      component: Default,
      redirect: 'index',
      meta: {title: '基础商品管理'},
      children: [
        {
          path: 'index',
          component: baseGoods,
          meta: {title: '基础商品'}
        }
      ]
    },
    {
      path: 'mallGoods',
      component: Default,
      meta: {title: '快递到家商品'},
      redirect: 'CommonModule',
      children: [
        {
          path: 'CommonModule',
          component: CommonModuleM,
          meta: {title: '商详通用设置'}
        },
        {
          path: 'list',
          component: ListM,
          meta: {title: '商品列表'}
        },
        {
          path: 'ShowClassFY',
          component: ShowClassFYM,
          meta: {title: '前端分类展示'}
        }
      ]
    },
    {
      path: 'propertyMange',
      component: Default,
      redirect: 'specs',
      meta: {title: '属性管理'},
      children: [
        {
          path: 'specs',
          component: Specs,
          meta: {title: '规格管理'}
        },
        {
          path: 'params',
          component: Params,
          meta: {title: '参数管理'}
        },
        {
          path: 'category',
          component: Category,
          meta: {title: '基础分类'}
        }
      ]
    },
    {
      path: 'supplyGoods',
      component: Default,
      redirect: 'list',
      meta: {title: '商家采购商品'},
      children: [
        {
          path: 'commonModule',
          component: CommonModuleS,
          meta: {title: '商详通用设置'}
        },
        {
          path: 'list',
          component: ListS,
          meta: {title: '商品列表'}
        },
        {
          path: 'showClassFY',
          component: ShowClassFYS,
          meta: {title: '前端分类展示'}
        }
      ]
    }
  ]
}

export default goods
