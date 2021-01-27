import repertoryDistribution from '../pages/repertory/repertory-distribution/repertoryDistribution'
import repertoryAlter from '../pages/repertory/repertoryAlter/repertoryAlter'
import Repertory from '../pages/repertory/Repertory'

const repertory = {
  path: '/repertory',
  component: Repertory,
  redirect: '/repertory/index',
  name: 'repertory',
  meta: {title: '库存查询', icon: '#i-repertory', layer: 2, sort: 1},
  auth: 'STOCK_CENTER',
  children: [
    {
      path: 'repertoryDistribution',
      name: 'repertoryDistribution',
      component: repertoryDistribution, // () => import('../pages/repertory/repertory-distribution'),
      meta: {title: '商品库存查询', sort: 2},
      auth: 'STOCK_DISTRIBUTION_PAGE'
    },
    {
      path: 'repertoryAlter',
      name: 'repertoryAlter',
      component: repertoryAlter, // () => import('@/pages/repertory/repertory-alter'),
      meta: { title: '库存变更记录' },
      auth: 'STOCK_CHANGE_HISTORY_PAGE',
      keepAlive: false
    }
  ]
}
export default repertory

// WEBPACK FOOTER //
// ./src/router/repertory.js
