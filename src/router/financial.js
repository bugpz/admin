/*
 * @Description:financial.js
 * @CreatedBy:WebStorm
 * @Author: BugP
 * @Date: 2021-02-01 19:44
 * @LastEditTime: 2021-02-01 19:44
 * @LastEditors: BugP
*/
import Default from '../pages/Default/Default'
import platformFund from '../pages/financial/platform/platformFund'
import walletStatus from '../pages/financial/user/walletStatus/walletStatus'
import shopFund from '../pages/financial/user/shopFind/shopFund'
import shopSubsidy from '../pages/financial/user/shopSubsidy/shopSubsidy'
import leaderFund from '../pages/financial/user/leaderFund/leaderFund'
import leaderSubsidy from '../pages/financial/user/leaderSubsidy/leaderSubsidy'
import shopWithdraw from '../pages/financial/audits/shopWithdraw/shopWithdraw'
import leaderWithdraw from '../pages/financial/audits/leaderWithdraw/leaderWithdraw'

const financial = {
  path: '/financial',
  meta: {title: '财务管理', icon: '#i-finance', layer: 3},
  redirect: '/financial/index',
  component: Default,
  children: [
    {
      path: 'platform',
      meta: {title: '平台资金'},
      component: Default,
      children: [
        {
          path: 'platformFund',
          meta: {title: '平台资金管理'},
          component: platformFund
        }
      ]
    },
    {
      path: 'user',
      meta: {title: '客户资金'},
      component: Default,
      children: [
        {
          path: 'walletStatus',
          meta: {title: '门店钱包状态'},
          component: walletStatus
        },
        {
          path: 'shopFund',
          meta: {title: '门店资金管理'},
          component: shopFund
        },
        {
          path: 'shopSubsidy',
          meta: {title: '门店补贴审核'},
          component: shopSubsidy
        },
        {
          path: 'leaderFund',
          meta: {title: '团长资金管理'},
          component: leaderFund
        },
        {
          path: 'leaderSubsidy',
          meta: {title: '团长补贴审核'},
          component: leaderSubsidy
        }
      ]
    },
    {
      path: 'audits',
      meta: {title: '提现审核'},
      component: Default,
      children: [
        {
          path: 'shopWithdraw',
          meta: {title: '门店提现审核'},
          component: shopWithdraw
        },
        {
          path: 'leaderWithdraw',
          meta: {title: '团长提现审核'},
          component: leaderWithdraw
        }
      ]
    }
  ]
}
export default financial
