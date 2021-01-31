/*
 * @Description:order.js
 * @CreatedBy:WebStorm
 * @Author: BugP
 * @Date: 2021-01-31 16:49
 * @LastEditTime: 2021-01-31 16:49
 * @LastEditors: BugP
*/
import Default from '../pages/Default/Default'
import ExpressService from '../pages/order/expressService/ExpressService'
import Deliver from '../pages/order/deliver/Deliver'
import MerchantOwned from '../pages/order/merchantOwned/MerchantOwned'
import MerchantProcurement from '../pages/order/merchantProcurement/MerchantProcurement'
import ProductPreSale from '../pages/order/productPreSale/ProductPreSale'

const order = {
  path: '/order',
  meta: {title: '订单管理', icon: '#i-order', layer: 2},
  component: Default,
  redirect: '/order/index',
  children: [
    {
      path: 'expressService',
      component: ExpressService,
      meta: {title: '快递到家'}
    },
    {
      path: 'deliver',
      component: Deliver,
      meta: {title: '第三方配送'}
    },
    {
      path: 'merchantOwned',
      component: MerchantOwned,
      meta: {title: '商家自营'}
    },
    {
      path: 'merchantProcurement',
      component: MerchantProcurement,
      meta: {title: '商家采购'}
    },
    {
      path: 'productPresale',
      component: ProductPreSale,
      meta: {title: '社区团购'}
    }
  ]
}
export default order
