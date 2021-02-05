import newActive from '../pages/active/secondsKill/newactive/newActive'
import groupBooking from '../pages/active/shopping/group_booking/groupBooking'
import groupBookingVerify from '../pages/active/shopping/group_booking_verify/groupBookingVerify'
import sessionSet from '../pages/active/secondsKill/session_set/sessionSet'
import verify from '../pages/active/secondsKill/verify/verify'
import session from '../pages/active/secondsKill/session/session'
import Default from '../pages/Default/Default'

const active = {
  path: '/active',
  name: 'active',
  component: Default,
  redirect: '/active/index',
  meta: {title: '活动管理', icon: '#i-activity', layer: 3},
  children: [
    {
      path: 'shopping',
      name: 'shopping',
      component: Default,
      redirect: 'groupBooking',
      meta: {title: '拼团活动'},
      children: [
        {
          path: 'groupBooking',
          component: groupBooking,
          name: 'groupBooking',
          meta: {title: '拼团活动列表'}
        },
        {
          path: 'groupBookingVerify',
          component: groupBookingVerify,
          name: 'groupBookingVerify',
          meta: {title: '拼团活动审核'}
        }
      ]
    },
    {
      path: 'secondsKill',
      name: 'secondsKill',
      redirect: 'sessionSet/index',
      component: Default,
      meta: {title: '秒杀活动'},
      children: [
        {
          path: 'sessionSet',
          component: sessionSet,
          name: 'sessionSet',
          meta: {title: '秒杀场次设置'}
        },
        {
          path: 'newActive',
          component: newActive,
          name: 'newActive',
          meta: {title: '新增秒杀活动'}
        },
        {
          path: 'verify',
          component: verify,
          name: 'verify',
          meta: {title: '秒杀活动审核'}
        },
        {
          path: 'session',
          component: session,
          name: 'session',
          meta: {title: '秒杀活动管理'}
        }
      ]
    }
  ]
}

export default active
