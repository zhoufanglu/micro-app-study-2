<template>
  <div class="bdcp">
    <!--      baseroute="/child-app-1"-->
    <micro-app
      name="bdcp"
      url="http://localhost:5001/bdcp/"
      inline
      disableSandbox
      @mounted="handleMount"
      @unmount="handleUnmount"
    ></micro-app>
  </div>
</template>

<script setup>
const handleMount = () => {
  console.log('子应用-bdcp渲染了')
}
const handleUnmount = () => {
  console.log('子应用-bdcp卸载了')
}
</script>

<style
  scoped
  lang="scss"
>
.test {
}
</style>
