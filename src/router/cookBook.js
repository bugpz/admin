/*
 * @Description:cookBook.js
 * @CreatedBy:WebStorm
 * @Author: BugP
 * @Date: 2021-02-01 16:16
 * @LastEditTime: 2021-02-01 16:16
 * @LastEditors: BugP
*/
import Default from '../pages/Default/Default'
import cookBookTag from '../pages/cookBook/cookBookTag/cookBookTag'
import cookBookManage from '../pages/cookBook/cookBookManage/cookBookManage'
import cookBookAudit from '../pages/cookBook/cookBookAudit/cookBookAudit'

const cookBook = {
  path: '/cookBook',
  meta: {title: '菜谱管理', icon: '#i-menu', layer: 2},
  component: Default,
  redirect: '/cookBook/index',
  children: [
    {
      path: 'cookBookTag',
      meta: {title: '菜谱标签'},
      component: cookBookTag
    },
    {
      path: 'cookBookManage',
      meta: {title: '菜谱列表'},
      component: cookBookManage
    },
    {
      path: 'cookBookAudit',
      meta: {title: '菜谱审核'},
      component: cookBookAudit
    }
  ]
}
export default cookBook
