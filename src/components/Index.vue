<!--
 * @Description:
 * @Author: zhu
 * @Date: 2021-01-14 15:57:46
 * @LastEditTime: 2021-01-14 16:25:12
 * @LastEditors: zhu
-->
<template>
  <div style="text-align: center">
    <div>
      <h1>知乎日报</h1>
      <h4>{{this.articles.display_date}}</h4>
    </div>
    <div v-for="(i, index) in this.articles.news" :key="index">
      <a :href=i.share_url target="_blank">{{i.title}}</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Index',
  data () {
    return {
      articles: ''
    }
  },
  created () {
    this.ajaxFun()
  },
  methods: {
    ajaxFun () {
      const loginStatus = localStorage.getItem('loginStatus')
      if (!loginStatus) {
        location.replace(`/login?r=${Math.floor(Math.random() * 10000)}`)
      } else {
        const url = '/api/lanzou/api.php'
        axios
          .get(url)
          .then(res => {
            this.articles = JSON.parse(res.data.substring(0, res.data.length - 4))
            // console.log(res)
            // console.log(this.articles, typeof (this.articles))
            console.log('%cTime, shade fitting for; The heart, with distances', 'color:HotPink; font-size:25px')
          })
      }
    }
  }
}
</script>

<style scoped></style>
