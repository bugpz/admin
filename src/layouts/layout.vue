<template>
  <div>
    <Home @type-change='handleChange'/>  <!--监听home点击事件 -->
    <router-view :style="{marginLeft: type === 1 ? '201px!important' : '64px!important'}"/>
  </div>
</template>

<script>
import Home from '../components/Home'
export default {
  name: 'layout',
  components: {Home},
  data () {
    return {
      type: 1
    }
  },
  methods: {
    handleChange (type) {
      // console.log(type)
      this.type = type // type赋值为home的type
    }
  }
}
</script>

<style scoped>

</style>
