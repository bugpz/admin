import repertoryDistribution from '../pages/repertory/repertory-distribution/repertoryDistribution'
import Layout from '../pages/layouts/Layout'
const repertory = {
  path: '/repertory',
  component: Layout,
  redirect: '/repertory/index',
  name: 'repertory',
  meta: { title: '库存查询', icon: 'shop-manage' },
  auth: 'STOCK_CENTER',
  children: [
    {
      path: 'repertoryDistribution',
      name: 'repertoryDistribution',
      component: repertoryDistribution, // () => import('../pages/repertory/repertory-distribution'),
      meta: { title: '商品库存查询' },
      auth: 'STOCK_DISTRIBUTION_PAGE'
    }
  ]
}
export default repertory

// WEBPACK FOOTER //
// ./src/router/repertory.js
