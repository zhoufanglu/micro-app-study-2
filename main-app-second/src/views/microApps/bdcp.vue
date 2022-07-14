<template>
  <div
    v-loading="loading"
    class="bdcp"
  >
    <h3>地址: {{ url }}</h3>
    <!--      baseroute="/child-app-1"-->
    <micro-app
      name="bdcp"
      :url="url"
      inline
      disableSandbox
      @created="handleCreated"
      @mounted="handleMount"
      @unmount="handleUnmount"
      @error="handleError"
    ></micro-app>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import config from '@/micro/config.js'

const url = `${config.bdcp}/bdcp/`
const loading = ref(false)

const handleCreated = () => {
  loading.value = true
}
const handleMount = () => {
  loading.value = false
  console.log(33, loading)
  console.log('子应用-bdcp渲染了')
}
const handleUnmount = () => {
  console.log('子应用-bdcp卸载了')
}
const handleError = () => {
  console.log('子应用-bdcp出错了')
  loading.value = false
}
</script>

<style
  scoped
  lang="scss"
>
.test {
}
</style>
