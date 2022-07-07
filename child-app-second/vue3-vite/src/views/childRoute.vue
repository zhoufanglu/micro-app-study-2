<template>
  <div class="child-app">
    <h1>child-route</h1>
    <span>子路由</span>
    <button @click="$router.go(-1)">go -1 ----回退</button>
  </div>
</template>

<script setup>
console.log('child-route---')
</script>

<style scoped>
button{
  color: red;
}
</style>
