/*
 * @Description:other.js
 * @CreatedBy:WebStorm
 * @Author: BugP
 * @Date: 2021-02-04 17:21
 * @LastEditTime: 2021-02-04 17:21
 * @LastEditors: BugP
*/
import Default from '../pages/Default/Default'
import exports from '../pages/others/exports/exports'

const other = {
  path: '/other',
  component: Default,
  redirect: '/other/index',
  meta: {title: '其他相关', icon: '#i-other', layer: 2},
  children: [
    {
      path: 'exports',
      meta: {title: '导出下载'},
      component: exports
    }
  ]
}
export default other
