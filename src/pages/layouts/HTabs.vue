<!--
 * @Description:Tabs.vue
 * @CreatedBy:WebStorm
 * @Author: BugP
 * @Date: 2021-01-31 14:07
 * @LastEditTime: 2021-01-31 14:07
 * @LastEditors: BugP
-->
<template>
  <div>
    <div style="height: 44px" v-if="$route.path !== '/index' && $route.path !== '/error'">
      <el-tabs
        :closable="true"
        type="card"
      >
        <el-tab-pane :label="$route.meta.title">
        </el-tab-pane>
      </el-tabs>
    </div>
    <div style="height: 44px" v-else-if="$route.path === '/index'">
      <el-tabs
        :closable="true"
        type="card"
      >
        <el-tab-pane label="首页">
        </el-tab-pane>
      </el-tabs>
    </div>
    <div style="height: 44px" v-else>
      <el-tabs
        :closable="true"
        type="card"
      >
        <el-tab-pane label="PathError">
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HTabs'
}
</script>

<style scoped>

</style>
