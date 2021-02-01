/*
 * @Description:merchantGoods.js
 * @CreatedBy:WebStorm
 * @Author: BugP
 * @Date: 2021-02-01 15:16
 * @LastEditTime: 2021-02-01 15:16
 * @LastEditors: BugP
*/
import Default from '../pages/Default/Default'
import goodsAuditList from '../pages/merchantGoods/goodsAuditList/goodsAuditList'
import merchantGoodsList from '../pages/merchantGoods/merchantGoodsList/merchantGoodsList'
import merchantGoodsMaterial from '../pages/merchantGoods/merchantGoodsMaterial/merchantGoodsMaterial'
import merchantGoodsOrder from '../pages/merchantGoods/merchantGoodsOrder/merchantGoodsOrder'

const merchantGoods = {
  path: '/merchantGoods',
  meta: {title: '商家商品', icon: '#i-merchantGoods', layer: 2},
  component: Default,
  redirect: '/merchantGoods/index',
  children: [
    {
      path: 'goodsAuditList',
      meta: {title: '自营商品审核'},
      component: goodsAuditList
    },
    {
      path: 'merchantGoodsList',
      meta: {title: '自营商品列表'},
      component: merchantGoodsList
    },
    {
      path: 'merchantGoodsMaterial',
      meta: {title: '商品素材库'},
      component: merchantGoodsMaterial
    },
    {
      path: 'merchantGoodsOrder',
      meta: {title: '素材商品排序'},
      component: merchantGoodsOrder
    }
  ]
}
export default merchantGoods
