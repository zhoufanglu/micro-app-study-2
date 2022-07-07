<script>
export default {
  name: 'HelloWorld'
}
</script>
<script setup>
/*import { ref, getCurrentInstance } from 'vue'
import {onBeforeRouteLeave} from 'vue-router'

// getCurrentInstance().vnode.type.name = 'HelloWorld-1'
// console.log(10, getCurrentInstance().vnode)


const count = ref(0)

onBeforeRouteLeave ((to, from)=> {
  /!*console.log(to.name)
  console.log(from.name)
  console.log('------')*!/
})*/


</script>

<template>
  <div style="border: solid 1px red">
    <h2>HelloWorld</h2>
<!--    <h2>tog</h2>
    <button @click="$router.push('/childRoute')">go 去子路由</button>
    <p>
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>
    <div>
      <input type="text">
    </div>
    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">
        Vite Documentation
      </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    </p>

    <button type="button" @click="count++">count is: {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>-->
  </div>
</template>

<style scoped lang="scss">
a {
  color: #42b983;
}
h2{
  color: $theme;
}
</style>
