<template>
  <div
    v-loading="loading"
    class="user-manage"
  >
    <!--      baseroute="/child-app-1"-->
    <micro-app
      name="userManage"
      :url="url"
      inline
      @created="handleCreated"
      @mounted="handleMount"
    ></micro-app>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import config from '@/micro/config.js'

const url = `${config.userManage}/userManage/`

const loading = ref(false)
/** ********************micro-app生命周期********************** */
const handleCreated = () => {
  loading.value = true
}

const handleMount = () => {
  loading.value = false
  console.log('子应用-child-app-1渲染了')
}
</script>

<style
  scoped
  lang="scss"
>
.user-manage {
}
</style>
