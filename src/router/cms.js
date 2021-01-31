/*
 * @Description:
 * @Author: BugP
 * @Date: 2021-01-31 00:11
 * @LastEditTime: 2021-01-31 00:11
 * @LastEditors: BugP
*/
import Default from '../pages/Default/Default'
import specialCMS from '../pages/cms/special/specialCMS'
import CMSIndex from '../pages/cms/index/CMSIndex'

const cms = {
  path: 'cms',
  components: Default,
  name: 'cms',
  meta: {title: 'CMS装修', icon: '#i-cms', layer: 2},
  redirect: 'index',
  children: [
    {
      path: 'special',
      meta: {title: '专题活动配置'},
      component: specialCMS
    },
    {
      path: 'index',
      meta: {title: '首页配置'},
      component: CMSIndex
    }
  ]
}
export default cms
