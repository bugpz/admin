<template>
  <div>
    <el-row :span="12" class="e_col" :style="{width: type === 1 ? '201px!important' : '64px!important'}">
      <el-col  >
        <el-menu
          :collapse="type !== 1 "
          :collapse-transition="false"
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#304156"
          text-color="#fff"
          router
        >
          <el-menu-item index="/index">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#i-home"></use>
              </svg>
              <span>首页</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#i-marketing"></use>
              </svg>
              <span>营销管理</span>
            </template>
            <el-submenu index="1-1">
              <template slot="title">优惠券管理</template>
              <el-menu-item index="/h">平台优惠券管理</el-menu-item>
              <el-menu-item index="/1-1-1">平台优惠券审核</el-menu-item>
              <el-menu-item index="/1-1-2">商家优惠券管理</el-menu-item>
            </el-submenu>
            <el-submenu index="1-2">
              <template slot="title">购物送券</template>
              <el-menu-item index="1-2-1">购物送券申请</el-menu-item>
              <el-menu-item index="1-2-2">购物送券审核</el-menu-item>
            </el-submenu>
            <el-submenu index="1-3">
              <template slot="title">人工发券</template>
              <el-menu-item index="1-3-1">人工发券申请</el-menu-item>
              <el-menu-item index="1-3-2">人工发券审核</el-menu-item>
            </el-submenu>
            <el-submenu index="1-4">
              <template slot="title">营销场景</template>
              <el-menu-item index="1-4-1">邀请有礼设置</el-menu-item>
              <el-menu-item index="1-4-2">领券中心统计</el-menu-item>
              <el-menu-item index="1-4-3">新人礼统计</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#i-activity"></use>
              </svg>
              <span slot="title">活动管理</span>
            </template>
            <el-submenu index="2-1">
            <template slot="title">拼团活动</template>
            <el-menu-item index="2-1-1">拼团活动审核</el-menu-item>
            <el-menu-item index="2-1-2">拼团活动列表</el-menu-item>
            </el-submenu>
            <el-submenu index="2-2">
              <template slot="title">秒杀活动</template>
              <el-menu-item index="2-2-1">秒杀时段设置</el-menu-item>
              <el-menu-item index="2-2-2">新增秒杀活动</el-menu-item>
              <el-menu-item index="2-2-3">秒杀活动审核</el-menu-item>
              <el-menu-item index="2-2-4">秒杀活动管理</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#i-ad"></use>
              </svg>
              <span>广告管理</span>
            </template>
              <el-menu-item index="3-1">广告配置</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#i-cms"></use>
              </svg>
              <span>CMS装修</span>
            </template>
            <el-menu-item index="4-1">专题活动配置</el-menu-item>
            <el-menu-item index="4-2">首页配置</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <svg class="icon">
                <use xlink:href="#i-repertory"></use>
              </svg>
              <span>库存查询</span>
            </template>
            <el-menu-item index="5-1">库存变更记录</el-menu-item>
            <el-menu-item index="5-2">商品库存查询</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#i-order"></use>
              </svg>
              <span>订单管理</span>
            </template>
            <el-menu-item index="6-1">快递到家</el-menu-item>
            <el-menu-item index="6-2">第三方配送单</el-menu-item>
            <el-menu-item index="6-3">商家自营</el-menu-item>
            <el-menu-item index="6-4">商家采购</el-menu-item>
            <el-menu-item index="6-5">社区团购</el-menu-item>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#i-after-sale"></use>
              </svg>
              <span>售后管理</span>
            </template>
            <el-menu-item index="7-1">退货退款审核</el-menu-item>
            <el-menu-item index="7-2">补充发货审核</el-menu-item>
            <el-menu-item index="7-3">换货审核</el-menu-item>
            <el-menu-item index="7-4">商家售后记录</el-menu-item>
            <el-menu-item index="7-5">退款审核</el-menu-item>
            <el-menu-item index="7-6">发券补偿审核</el-menu-item>
            <el-menu-item index="7-7">平台售后处理</el-menu-item>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#i-colonel"></use>
              </svg>
              <span>团长管理</span>
            </template>
            <el-menu-item index="8-1">团长入驻审核</el-menu-item>
          </el-submenu>
          <el-submenu index="9">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#i-merchant"></use>
              </svg>
              <span>商家管理</span>
            </template>
            <el-menu-item index="9-1">信息修改审核</el-menu-item>
            <el-menu-item index="9-2">门店列表</el-menu-item>
            <el-menu-item index="9-3">门店注销</el-menu-item>
            <el-menu-item index="9-4">打印机管理</el-menu-item>
            <el-menu-item index="9-5">门店标签</el-menu-item>
            <el-menu-item index="9-6">新增门店</el-menu-item>
            <el-menu-item index="9-7">门店入驻审核</el-menu-item>
            <el-menu-item index="9-8">账号管理</el-menu-item>
          </el-submenu>
          <el-submenu index="10">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#i-commodity"></use>
              </svg>
              <span>商家商品</span>
            </template>
            <el-menu-item index="10-1">自营商品审核</el-menu-item>
            <el-menu-item index="10-2">自营商品列表</el-menu-item>
            <el-menu-item index="10-3">素材商品排序</el-menu-item>
            <el-menu-item index="10-4">商品素材库</el-menu-item>
          </el-submenu>
          <el-submenu index="11">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#i-menu"></use>
              </svg>
              <span>菜谱管理</span>
            </template>
            <el-menu-item index="11-1">菜谱列表</el-menu-item>
            <el-menu-item index="11-2">菜谱审核</el-menu-item>
            <el-menu-item index="11-3">菜谱标签</el-menu-item>
          </el-submenu>
          <el-submenu index="12">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#i-finance"></use>
              </svg>
              <span>财务管理</span>
            </template>
            <el-submenu index="12-1">
              <template slot="title">平台资金</template>
              <el-menu-item index="12-1-1">平台资金管理</el-menu-item>
            </el-submenu>
            <el-submenu index="12-2">
              <template slot="title">提现审核</template>
              <el-menu-item index="12-2-1">团长提现管理</el-menu-item>
              <el-menu-item index="12-2-2">门店提现管理</el-menu-item>
            </el-submenu>
            <el-submenu index="12-3">
              <template slot="title">客户资金</template>
              <el-menu-item index="12-3-1">团长补贴审核</el-menu-item>
              <el-menu-item index="12-3-2">团长资金管理</el-menu-item>
              <el-menu-item index="12-3-3">门店资金管理</el-menu-item>
              <el-menu-item index="12-3-4">门店钱包状态</el-menu-item>
              <el-menu-item index="12-3-5">门店补贴审核</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="13">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#i-user"></use>
              </svg>
              <span>用户管理</span>
            </template>
            <el-menu-item index="13-1">商品浏览记录</el-menu-item>
            <el-menu-item index="13-2">标签设置</el-menu-item>
            <el-menu-item index="13-3">灰黑名单</el-menu-item>
            <el-menu-item index="13-4">用户列表</el-menu-item>
            <el-menu-item index="13-5">用户收藏菜谱</el-menu-item>
            <el-menu-item index="13-6">成长值设置</el-menu-item>
            <el-menu-item index="13-7">用户收藏商品</el-menu-item>
            <el-menu-item index="13-8">用户收藏门店</el-menu-item>
          </el-submenu>
          <el-submenu index="14">
            <template slot="title">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#i-msg"></use>
                </svg>
              <span>消息管理</span>
            </template>
            <el-menu-item index="14-1">消息设置</el-menu-item>
            <el-menu-item index="14-2">短信记录</el-menu-item>
            <el-menu-item index="14-3">站内信消息</el-menu-item>
            <el-menu-item index="14-4">文字PUSH</el-menu-item>
            <el-menu-item index="14-5">文字PUSH记录</el-menu-item>
            <el-menu-item index="14-6">站内信记录</el-menu-item>
            <el-menu-item index="14-7">语音PUSH记录</el-menu-item>
            <el-menu-item index="14-8">语音PUSH</el-menu-item>
            <el-menu-item index="14-9">短信消息</el-menu-item>
          </el-submenu>
          <el-submenu index="15">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#i-logistics"></use>
              </svg>
              <span>物流设置</span>
            </template>
            <el-menu-item index="15-1">用户物流设置</el-menu-item>
            <el-menu-item index="15-2">商家物流设置</el-menu-item>
          </el-submenu>
          <el-submenu index="16">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#i-system"></use>
              </svg>
              <span>系统设置</span>
            </template>
            <el-submenu index="16-1">
              <template slot="title">基础配置</template>
              <el-menu-item index="16-1-1">预置变量</el-menu-item>
              <el-menu-item index="16-1-2">数据字典</el-menu-item>
            </el-submenu>
            <el-submenu index="16-2">
              <template slot="title">权限管理</template>
              <el-menu-item index="16-2-1">人员管理</el-menu-item>
              <el-menu-item index="16-2-2">组织管理</el-menu-item>
              <el-menu-item index="16-2-3">角色管理</el-menu-item>
              <el-menu-item index="16-2-4">菜单管理</el-menu-item>
            </el-submenu>
            <el-menu-item index="16-3"> APP版本管理</el-menu-item>
          </el-submenu>
          <el-submenu index="17">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#i-other"></use>
              </svg>
              <span>其他相关</span>
            </template>
            <el-menu-item index="17-1">导出下载</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
    <div style="margin-left: 201px!important;">
      <div>
        <el-button @click="handleChange(type)" :icon="type === 1 ? 'el-icon-s-fold' : 'el-icon-s-unfold' " title="0" ></el-button>
        <span style="padding-left: 10px;font-size: 14px">首页</span>
        <span v-if="$route.path !== '/index' ">/{{$route.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      type: 1
    }
  },
  methods: {
    handleChange () {
      if (this.type === 1) {
        this.type = 2
      } else {
        this.type = 1
      }
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  .e_col{
    position: absolute;
    background-color: #758fa9;
  }
  .icon {
    width: 18px; height: 18px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
