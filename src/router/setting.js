/*
 * @Description:setting.js
 * @CreatedBy:WebStorm
 * @Author: BugP
 * @Date: 2021-02-02 11:06
 * @LastEditTime: 2021-02-02 11:06
 * @LastEditors: BugP
*/
import Default from '../pages/Default/Default'
import presetVariable from '../pages/setting/data/presetVariable/presetVariable'
import dictionaryList from '../pages/setting/data/dictionaryList/dictionaryList'
import roleManage from '../pages/setting/authSettings/roleManage/roleManage'
import organizationManage from '../pages/setting/authSettings/organizationManage/organizationManage'
import memberManage from '../pages/setting/authSettings/memberManage/memberManage'
import menuManage from '../pages/setting/authSettings/menuManage/menuManage'
import appVersionManage from '../pages/setting/appVersionManage/appVersionManage'

const setting = {
  path: '/setting',
  meta: {title: '系统设置', icon: '#i-system', layer: 3},
  component: Default,
  redirect: '/setting/index',
  children: [
    {
      path: 'data',
      meta: {title: '基础配置'},
      component: Default,
      children: [
        {
          path: 'presetVariable',
          meta: {title: '预置变量'},
          component: presetVariable
        },
        {
          path: 'dictionaryList',
          meta: {title: '数据字典'},
          component: dictionaryList
        }
      ]
    },
    {
      path: 'authSetting',
      meta: {title: '权限管理'},
      component: Default,
      children: [
        {
          path: 'roleManage',
          meta: {title: '角色管理'},
          component: roleManage
        },
        {
          path: 'organizationManage',
          meta: {title: '组织管理'},
          component: organizationManage
        },
        {
          path: 'memberManage',
          meta: {title: '人员管理'},
          component: memberManage
        },
        {
          path: 'menuManage',
          meta: {title: '菜单管理'},
          component: menuManage
        }
      ]
    },
    {
      path: 'appVersion',
      meta: {title: 'APP版本管理', layer: 2},
      component: appVersionManage
    }
  ]
}
export default setting
