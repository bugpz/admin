/*
 * @Description:user.js
 * @CreatedBy:WebStorm
 * @Author: BugP
 * @Date: 2021-02-01 21:59
 * @LastEditTime: 2021-02-01 21:59
 * @LastEditors: BugP
*/
import Default from '../pages/Default/Default'
import infoList from '../pages/user/infoList/infoList'
import storeCollection from '../pages/user/storeCollection/storeCollection'
import productCollection from '../pages/user/productCollection/productCollection'
import menuCollection from '../pages/user/menuCollection/menuCollection'
import productHistory from '../pages/user/productHistory/productHistory'
import creditSetting from '../pages/user/creditSetting/creditSetting'
import tagSetting from '../pages/user/tagSetting/tagSetting'
import blackList from '../pages/user/blackList/blackList'

const user = {
  path: '/user',
  meta: {title: '用户管理', icon: '#i-user', layer: 2},
  redirect: '/user/index',
  component: Default,
  children: [
    {
      path: 'infoList',
      meta: {title: '用户列表'},
      component: infoList
    },
    {
      path: 'storeCollection',
      meta: {title: '用户收藏门店'},
      component: storeCollection
    },
    {
      path: 'productCollection',
      meta: {title: '用户收藏商品'},
      component: productCollection
    },
    {
      path: 'menuCollection',
      meta: {title: '用户收藏菜谱'},
      component: menuCollection
    },
    {
      path: 'productHistory',
      meta: {title: '商品浏览记录'},
      component: productHistory
    },
    {
      path: 'creditSetting',
      meta: {title: '成长值设置'},
      component: creditSetting
    },
    {
      path: 'tagSetting',
      meta: {title: '标签设置'},
      component: tagSetting
    },
    {
      path: 'blackList',
      meta: {title: '灰黑名单'},
      component: blackList
    }
  ]
}
export default user
