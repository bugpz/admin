<template>
  <div>
    <div>
      <span>秒杀配置</span>
      <el-time-picker
        v-model="value1"
      ></el-time-picker>
      <span>至</span>
      <el-time-picker
        v-model="value2"
      ></el-time-picker>
    </div>
  </div>
</template>

<script>
export default {
  name: 'session_set',
  data () {
    return {
      value1: new Date(),
      value2: new Date()
    }
  }
}
</script>

<style scoped>

</style>
