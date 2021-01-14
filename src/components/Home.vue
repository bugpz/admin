<template>
  <el-row>
    <el-col :span="12" class="e_col">
      <el-menu
        :collapse-transition="false"
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#304156"
        text-color="#fff"
        router
      >
        <el-menu-item index="/">
            <i class="el-icon-house"></i>
            <span>首页</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-data-line"></i>
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
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Home',
  methods: {
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
    top: 0;
    width: 201px!important;
    position: absolute;
    background-color: #758fa9;
  }
</style>
