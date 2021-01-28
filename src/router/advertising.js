import Advertising from '../pages/advertising/index'
import SpaceList from '../pages/advertising/spaceList/spaceList'

const advertising = {
  path: '/advertising',
  redirect: 'spaceList',
  component: Advertising,
  meta: {title: '广告管理', icon: '#i-ad', layer: 2},
  children: [
    {
      path: 'spaceList',
      component: SpaceList,
      meta: {title: '广告配置'}
    }
  ]
}

export default advertising
