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
        <el-row>
          <el-col
            :span="5"
            :offset="10"
          >
            <el-form-item>
              <el-input
                v-model="inputUser"
                placeholder="用户账号"
                prefix-icon="el-icon-mobile-phone"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col
            :span="5"
            :offset="10"
          >
            <el-form-item>
              <el-input
                v-model="inputPass"
                placeholder="密码"
                prefix-icon="el-icon-lock"
                show-password
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col
            :span="3"
            :offset="10"
          >
            <el-form-item>
              <el-input
                v-model="inputImg"
                maxlength="4"
                prefix-icon="el-icon-collection"
                placeholder="图形验证码"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col
            :span="2"
          >
            <el-image
              :src="imgSrc"
            ></el-image>
          </el-col>
        </el-row>
        <el-row>
          <el-col
            :span="3"
            :offset="10"
          >
            <el-input
              maxlength="4"
              placeholder="请输入验证码"
              v-model="inputGraphicCode"
            ></el-input>
          </el-col>
          <el-col
            :span="2"
          >
            <el-button
              type="primary"
            >
              立即获取验证码
            </el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col
            :span="5"
            :offset="10"
          >
            <el-button
              @click="handleClick"
            >
              登录
            </el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      inputUser: '',
      inputPass: '',
      inputImg: '',
      loginUserId: '',
      imgCode: 'https://webapi.meiweigx.com/api/web/getGraphicCode?loginUserId=',
      inputGraphicCode: '',
      imgSrc: ''
    }
  },
  created () {
    this.ajaxFun()
  },
  methods: {
    ajaxFun () {
      const url = '/api/web/getClientInfos' // 客户端信息
      axios
        .get(url)
        .then(res => {
          this.loginUserId = res.data.result.loginUserId
          this.imgSrc = (this.imgCode + res.data.result.loginUserId)
          console.log(this.loginUserId)
        })
    },
    handleClick () {
      const url = '/api/web/login'
      const md5Pass = this.$md5(this.inputPass)
      axios
        .post(url, {
          'graphicCode': this.inputImg,
          'loginName': this.inputUser,
          'loginUserId': this.loginUserId,
          'password': md5Pass,
          'smsCode': this.inputGraphicCode
        })
        .then(res => {
          console.log(res.data.message)
        })
    }
  }
}
</script>

<style scoped>

</style>
