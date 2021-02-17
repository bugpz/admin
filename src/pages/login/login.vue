<!--
 * @Description:login.vue
 * @CreatedBy:WebStorm
 * @Author: BugP
 * @Date: 2021-02-17 23:13
 * @LastEditTime: 2021-02-17 23:13
 * @LastEditors: BugP
-->
<template>
  <div>
    <div>
      <el-form>
        <el-form-item>
          <el-input
          placeholder="用户账号"
          prefix-icon="el-icon-mobile-phone"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            placeholder="密码"
            prefix-icon="el-icon-lock"
            show-password
            ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            prefix-icon="el-icon-collection"
            placeholder="图形验证码"
            ></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style scoped>

</style>
