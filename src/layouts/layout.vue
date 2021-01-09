<template>
  <div>
    <Home/>
    <!--    <HelloWorld/>-->
    <router-view/>
  </div>
</template>

<script>
  import Home from "../components/Home";
    export default {
        name: "layout",
      components: {Home},
    }
</script>

<style scoped>

</style>
