<template>
  <div>
    <el-form
      :inline=true
    >
      <el-form-item
        label="基础商品编码"
        :rules="[
          {required: true, message: '请输入邮箱地址', trigger: 'blur'}
        ]"
      >
        <el-input placeholder="基础商品编码" v-model="input"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small">查询</el-button>
        <el-button type="success" size="small" native-type="reset">清空</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      input: ''
    }
  }
}
</script>

<style scoped>
</style>
