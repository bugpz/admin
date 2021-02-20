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
    <div style="margin-left: 30%">
      <h1 style="margin-top: 10%; color: hotpink">
        Time, shade fitting for; The heart, with distances
      </h1>
    </div>
    <div style="margin-top: 15%">
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
              class="login_btn_width"
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
              class="login_btn_width"
              @click="handleSmsCode"
            >
              {{ buttonMeg }}
            </el-button>
          </el-col>
        </el-row>
        <el-row style="margin-top: 1.5%">
          <el-col
            :span="5"
            :offset="10"
          >
            <el-button
              @click="handleClick"
              class="login_btn_width"
              type="primary"
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
      imgSrc: '',
      is_login: '',
      buttonMeg: '立即获取验证码'
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
          if (res.data.code === 200) {
            const token = (res.data.result.tokenType + ' ' + res.data.result.token)
            const userPhone = this.inputUser
            const username = res.data.result.loginName
            console.log(res.data.message, res.data)
            this.is_login = true
            localStorage.setItem('token', token)
            localStorage.setItem('userPhone', userPhone)
            localStorage.setItem('username', username)
            localStorage.setItem('loginStatus', this.is_login)
            location.replace('/')
          } else {
            location.replace(`/login?r=${Math.floor(Math.random() * 10000)}`)
            alert(res.data.message)
          }
        })
    },
    handleSmsCode () { // 获取短信验证码
      const url = '/api/web/sendSmCode/' + this.inputUser + '/' + this.loginUserId
      axios
        .get(url)
        .then(res => {
          if (res.data.code === 200) {
            this.buttonMeg = res.data.message
          } else {
            this.buttonMeg = res.data.message
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
