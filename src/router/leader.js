/*
 * @Description:leader.js
 * @CreatedBy:WebStorm
 * @Author: BugP
 * @Date: 2021-01-31 17:51
 * @LastEditTime: 2021-01-31 17:51
 * @LastEditors: BugP
*/
import Default from '../pages/Default/Default'
import reviewManage from '../pages/leader/reviewManage/reviewManage'

const leader = {
  path: '/leader',
  meta: {title: '团长管理', icon: '#i-colonel', layer: 2},
  component: Default,
  redirect: '/leader/index',
  children: [
    {
      path: 'reviewManage',
      component: reviewManage,
      meta: {title: '团长入驻审核'}
    }
  ]
}
export default leader
