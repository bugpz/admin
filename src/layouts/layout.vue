<template>
  <div>
    <Home/>
    <router-view id="router-view"/>
  </div>
</template>

<script>
import Home from '../components/Home'
export default {
  name: 'layout',
  components: {Home}
}
</script>

<style scoped>
#router-view {
  margin-left: 201px!important;
}

</style>
