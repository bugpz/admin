/*
 * @Description:afterSale.js
 * @CreatedBy:WebStorm
 * @Author: BugP
 * @Date: 2021-01-31 17:24
 * @LastEditTime: 2021-01-31 17:24
 * @LastEditors: BugP
*/
import Default from '../pages/Default/Default'
import GoodsReturnForm from '../pages/afterSale/GoodsReturnForm/GoodsReturnForm'
import AgainSupplyForm from '../pages/afterSale/AgainSupplyForm/AgainSupplyForm'
import ExchangeGoodsForm from '../pages/afterSale/ExchangeGoodsForm/ExchangeGoodsForm'
import orderMerchant from '../pages/afterSale/orderMerchant/orderMerchant'
import RefundForm from '../pages/afterSale/refundForm/RefundForm'
import SendStampsForm from '../pages/afterSale/SendStampsForm/SendStampsForm'
import orderPlatform from '../pages/afterSale/orderPlatform/orderPlatform'

const afterSale = {
  path: '/afterSale',
  component: Default,
  meta: {title: '售后管理', icon: '#i-after-sale', layer: 2},
  redirect: '/afterSale/index',
  children: [
    {
      path: 'GoodsReturnForm',
      meta: {title: '退货退款审核'},
      component: GoodsReturnForm
    },
    {
      path: 'AgainSupplyForm',
      meta: {title: '补充发货审核'},
      component: AgainSupplyForm
    },
    {
      path: 'ExchangeGoodsForm',
      meta: {title: '换货审核'},
      component: ExchangeGoodsForm
    },
    {
      path: 'orderMerchant',
      meta: {title: '商家售后记录'},
      component: orderMerchant
    },
    {
      path: 'refundForm',
      meta: {title: '退款审核'},
      component: RefundForm
    },
    {
      path: 'SendStampsForm',
      meta: {title: '发券补偿审核'},
      component: SendStampsForm
    },
    {
      path: 'orderPlatform',
      meta: {title: '平台售后处理'},
      component: orderPlatform
    }
  ]
}
export default afterSale
