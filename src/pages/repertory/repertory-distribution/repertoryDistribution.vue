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
    <div v-for="sate in info" :key="sate">
      <p>{{info}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'index',
  data () {
    return {
      input: '',
      info: null
    }
  },
  mounted () {
    axios
      .get('https://qqlykm.cn/api/douyin/hot.php', {param: {withCredentials: false}})
      .then(response => (this.info = response.data.json))
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>

<style scoped>
</style>
