/*
 * @Description:logistics.js
 * @CreatedBy:WebStorm
 * @Author: BugP
 * @Date: 2021-02-02 10:56
 * @LastEditTime: 2021-02-02 10:56
 * @LastEditors: BugP
*/
import Default from '../pages/Default/Default'
import moduleSetting from '../pages/logistics/moduleSetting/moduleSetting'
import moduleManage from '../pages/logistics/moduleManage/moduleManage'

const logistics = {
  path: '/logistics',
  meta: {title: '物流设置', icon: '#i-logistics', layer: 2},
  redirect: '/logistics/index',
  component: Default,
  children: [
    {
      path: 'moduleSetting',
      meta: {title: '商家物流设置'},
      component: moduleSetting
    },
    {
      path: 'moduleManage',
      meta: {title: '用户物流设置'},
      component: moduleManage
    }
  ]
}
export default logistics
