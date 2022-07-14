<script setup>
import { getCurrentInstance, ref } from 'vue'

const logoPath = new URL('../src/assets/logo-child.png', import.meta.url).href
const includes = ref(['HelloWorld'])

const openAlive = () => {
  includes.value = ['HelloWorld']
}
const closeAlive = () => {
  includes.value = ['']
}
const addWorld = () => {
  const len = helloWorlds.value.length + 1
  helloWorlds.value.push({
    name: `world${len}`,
    id: len
  })
}

const helloWorlds = ref([
  { name: 'world-1', id: 1},
  { name: 'world-2', id: 2},
])

const linkClick = (route) => {
  // console.log(26, route)
}
// console.log(29, getCurrentInstance())



</script>

<template>
<!--
  <button @click="openAlive">缓存开</button>
  <button @click="closeAlive">缓存关</button>
  <button @click="addWorld">新增world页面</button>


  <router-link @click="linkClick(i)" :to="{path: '/', query: {id: i.id}}" v-for="i in helloWorlds" :key="i.id">{{i.name}}&#45;&#45;</router-link> |
-->

  <router-link to="/">HelloWorld</router-link> ---
  <router-link to="/HelloWorld/childRoute">childRoute</router-link>
  <br>
  <img alt="Vue logo" :src="logoPath" />
<!--  <img alt="Vue logo" src="src/assets/logo-child.png" />-->
<!--  <img alt="Vue logo" src="src/assets/logo-child.png" />-->
<!--  <keep-alive :include="['HelloWorld']">
    <router-view></router-view>
  </keep-alive>-->
<!--  <router-view v-slot="{ Component, route }" >
    {{route.query.id}}
    <keep-alive :include="includes">
      <component :is="Component" :key="route.query.id"></component>
    </keep-alive>
  </router-view>-->
  <router-view></router-view>

<!--  <router-view v-slot="{ Component, route }" >
    <h3>world-id: {{route.query.id}}</h3>
    <keep-alive :include="includes">
      <component :is="Component"></component>
    </keep-alive>
  </router-view>-->

</template>

<style>
#child-app-1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
