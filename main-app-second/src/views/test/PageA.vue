<template>
  <div
    class="p-page-A"
    name1="1"
    name2="2"
    name3="3"
  >
    <el-button
      type="primary"
      :loading="loading"
      @click="getUserTest"
    >
      点击请求
    </el-button>
    <br />
    <br />
    <el-button
      type="primary"
      @click="setPiniaSize"
    >
      设置Pinia窗口大小
    </el-button>
    {{ clientWidth }}-{{ clientHeight }}
    <div name="ccc"></div>

    Page-A
  </div>
</template>

<script setup>
import { ref, toRefs } from 'vue'
import { ElMessage } from 'element-plus'
import { useWindowStore } from '@/store/modules/window'
import api from '@/request/api'

/** ********************pinia********************** */
const windowStore = useWindowStore()

const { clientWidth, clientHeight } = toRefs(windowStore)

const setPiniaSize = () => {
  windowStore.setClientWidth(window.innerWidth)
  windowStore.setClientHeight(window.innerHeight)
  ElMessage.success('设置成功')
  console.log(41, clientWidth)
}

const loading = ref(false)
const getUserTest = async () => {
  try {
    loading.value = true
    const res = await api.user.test()
    console.log(res)
  } catch (e) {
    console.log('error', e)
  } finally {
    loading.value = false
    // close loading
  }
}
</script>

<style
  scoped
  lang="scss"
>
.p-page-A {
}
</style>
