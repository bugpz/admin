import BusinessCoupon from '../pages/market/couponManager/businessCoupon/BusinessCoupon'
import CIndex from '../pages/market/couponManager/index/CIndex'
import CVerify from '../pages/market/couponManager/verify/CVerify'
import MIndex from '../pages/market/manMade/MIndex/MIndex'
import Center from '../pages/market/scene/center/Center'
import Invitation from '../pages/market/scene/invitation/Invitation'
import newPeople from '../pages/market/scene/newPeople/newPeople'
import SVerify from '../pages/market/shopping/SVerify/SVerify'
import SIndex from '../pages/market/shopping/SIndex/SIndex'
import MVerify from '../pages/market/manMade/MVerify/MVerify'
import Default from '../pages/Default/Default'

const market = {
  path: '/market',
  meta: {title: '营销管理', icon: '#i-marketing', layer: 3},
  component: Default,
  redirect: '/market/index',
  children: [
    {
      path: 'couponManager',
      meta: {title: '优惠券管理'},
      component: Default,
      children: [
        {
          path: 'businessCoupon',
          component: BusinessCoupon,
          meta: {title: '商家优惠券列表'}
        },
        {
          path: 'index',
          component: CIndex,
          meta: {title: '平台优惠券列表'}
        },
        {
          path: 'verify',
          component: CVerify,
          meta: {title: '平台优惠券审核'}
        }
      ]
    },
    {
      path: 'manMade',
      meta: {title: '人工发券'},
      component: Default,
      children: [
        {
          path: 'index',
          component: MIndex,
          meta: {title: '人工发券申请'}
        },
        {
          path: 'verity',
          component: MVerify,
          meta: {title: '人工发券审核'}
        }
      ]
    },
    {
      path: 'scene',
      component: Default,
      meta: {title: '营销场景'},
      children: [
        {
          path: 'invitation',
          component: Invitation,
          meta: {title: '邀请有礼'}
        },
        {
          path: 'center',
          component: Center,
          meta: {title: '领券中心'}
        },
        {
          path: 'newPeople',
          component: newPeople,
          meta: {title: '新人礼'}
        }
      ]
    },
    {
      path: 'shopping',
      component: Default,
      meta: {title: '购物送券'},
      children: [
        {
          path: 'verify',
          component: SVerify,
          meta: {title: '购物送券审核'}
        },
        {
          path: 'index',
          component: SIndex,
          meta: {title: '购物送券申请'}
        }
      ]
    }
  ]
}

export default market
