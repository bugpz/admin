/*
 * @Description:seller.js
 * @CreatedBy:WebStorm
 * @Author: BugP
 * @Date: 2021-02-01 14:32
 * @LastEditTime: 2021-02-01 14:32
 * @LastEditors: BugP
*/
import Default from '../pages/Default/Default'
import auditList from '../pages/seller/auditList/auditList'
import modifyList from '../pages/seller/modifyList/modifyList'
import shopList from '../pages/seller/shopList/shopList'
import addShop from '../pages/seller/addShop/addShop'
import shopTag from '../pages/seller/shopTag/shopTag'
import shopPrinter from '../pages/seller/shopPrinter/shopPrinter'
import shopLogout from '../pages/seller/shopLogout/shopLogout'
import shopAccount from '../pages/seller/shopAccount/shopAccount'

const seller = {
  path: '/seller',
  component: Default,
  meta: {title: '商家管理', icon: '#i-merchant', layer: 2},
  redirect: '/seller/index',
  children: [
    {
      path: 'auditList',
      meta: {title: '门店入驻审核'},
      component: auditList
    },
    {
      path: 'modifyList',
      meta: {title: '信息修改审核'},
      component: modifyList
    },
    {
      path: 'shopList',
      meta: {title: '门店列表'},
      component: shopList
    },
    {
      path: 'addShop',
      meta: {title: '新增门店'},
      component: addShop
    },
    {
      path: 'shopTag',
      meta: {title: '门店标签'},
      component: shopTag
    },
    {
      path: 'shopPrinter',
      meta: {title: '打印机管理'},
      component: shopPrinter
    },
    {
      path: 'shopLogout',
      meta: {title: '门店注销'},
      component: shopLogout
    },
    {
      path: 'shopAccount',
      meta: {title: '账号管理'},
      component: shopAccount
    }
  ]
}
export default seller
