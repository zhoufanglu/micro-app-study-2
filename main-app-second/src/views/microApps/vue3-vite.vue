<template>
  <div
    v-loading="loading"
    class="vue3-vite"
  >
    <h1>child-app-1子应用</h1>
    <h3>地址: {{ `${config['child-app-1']}/child-app-1/` }}</h3>
    <!--      baseroute="/child-app-1"-->
    <!--url="http://localhost:4001/child-app-1/"-->
    <micro-app
      name="child-app-1"
      :url="`${config['child-app-1']}/child-app-1/`"
      inline
      disableSandbox
      @created="handleCreated"
      @mounted="handleMount"
      @unmount="handleUnmount"
    ></micro-app>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import config from '@/micro/config.js'

// console.log(19, config)
const loading = ref(false)
/** ********************micro-app生命周期********************** */
const handleCreated = () => {
  loading.value = true
}

const handleMount = () => {
  loading.value = false
  console.log('子应用-child-app-1渲染了')
}
const handleUnmount = () => {
  console.log('子应用-child-app-1卸载了')
}
</script>

<style
  scoped
  lang="scss"
>
.vue3-vite {
  min-height: 500px;
}
</style>
