<!--
 * @Description:show.vue
 * @CreatedBy:WebStorm
 * @Author: BugP
 * @Date: 2021-02-27 21:01
 * @LastEditTime: 2021-02-27 21:01
 * @LastEditors: BugP
-->
<template>
  <div>取值验证groupBuyActivityCode:{{ this.$route.query.groupBuyActivityCode }}<br>version:{{this.$route.query.version}}</div>
</template>

<script>
export default {
  name: 'show',
  data () {
    return {
      tableLists: []
    }
  },
  created () {
    this.ajaxFun()
  },
  methods: {
    ajaxFun () {
      const url = ('/api/web/promote/groupBuyActivity/findById?groupBuyActivityCode=' + this.$route.query.groupBuyActivityCode + '&version=' + this.$route.query.version)
      this.$axios
        .get(url, {headers: {
          authorization: localStorage.getItem('token')
        }})
        .then(res => {
          this.tableLists = res.data.result
          console.log(this.tableLists)
        })
    }
  }
}
</script>

<style scoped>

</style>
