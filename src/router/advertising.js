import SpaceList from '../pages/advertising/spaceList/spaceList'
import Default from '../pages/Default/Default'

const advertising = {
  path: '/advertising',
  redirect: 'spaceList',
  component: Default,
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
