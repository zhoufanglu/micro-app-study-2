<template>
  <div class="main-app-side-bar">
    <!--    <br />
    <router-link to="/page-A">page-A</router-link>
    <br />
    <router-link to="/page-B">page-B</router-link>-->
    <el-menu
      :default-openeds="openMenuIndexList"
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
    >
      <el-sub-menu
        v-for="(menu, index) in menuList"
        :key="index"
        :index="menu.name"
      >
        <template #title>
          <span>{{ menu.name }}</span>
        </template>
        <el-menu-item
          v-for="menuChild in menu.children"
          :key="menuChild.path"
          :index="menuChild.path"
          @click="menuItemClick(menuChild)"
        >
          {{ menuChild.name }}
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
import microApp, { EventCenterForMicroApp, getActiveApps } from '@micro-zoe/micro-app'

import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
// 因为vite子应用关闭了沙箱，我们需要为子应用child-app-1 创建EventCenterForMicroApp对象来实现数据通信
console.log(39, window)
window.eventCenterForChildApp_1 = new EventCenterForMicroApp('child-app-1')
window.eventCenterForChildApp_bdcp = new EventCenterForMicroApp('bdcp')

const router = useRouter()
const route = useRoute()

const menuList = ref([])
menuList.value = [
  {
    name: '主-app',
    children: [
      {
        name: 'page-A',
        path: '/page-A',
        appFrom: 'main'
      },
      {
        name: 'page-B',
        path: '/page-B',
        appFrom: 'main'
      }
    ]
  },
  {
    name: '子-child-app-1',
    children: [
      {
        name: 'home',
        path: '/HelloWorld',
        appFrom: 'child-app-1'
      },
      {
        name: 'childRoute',
        path: '/HelloWorld/childRoute',
        appFrom: 'child-app-1'
      }
    ]
  },
  {
    name: '子-bdcp',
    children: [
      {
        name: 'bdcp-home',
        path: '/',
        appFrom: 'bdcp'
      }
    ]
  },
  {
    name: '子-userManage',
    children: [
      {
        name: 'userManage-home',
        path: '/login',
        appFrom: 'userManage'
      }
    ]
  }
]
const openMenuIndexList = menuList.value.map(i => i.name)

/** ********************获取选中项********************** */
let activeIndex = ''
const getActiveIndex = () => {
  // console.log(83, route.fullPath)
  activeIndex = route.path
  // 遍历第二层菜单menu， 如果路由包含 path, activeIndex就是该path的
  menuList.value.forEach(menu => {
    menu.children.forEach(subMenu => {
      if (route.path.includes(subMenu.path)) {
        activeIndex = subMenu.path
      }
    })
  })
  console.log(92, activeIndex)
}
getActiveIndex()
/** ********************事件********************** */
const menuItemClick = item => {
  // 如果是主应用地址 就正常跳转
  if (item.appFrom === 'main') {
    router.push(item.path)
    /* if (window.eventCenterForChildApp_1) {
      window.eventCenterForChildApp_1.clearDataListener()
    } */
  }
  // 如果是子应用
  else {
    /**
     * 当子应用还未渲染，通过基座控制路由跳转，子应用在初始化时会自己根据url渲染对应页面
     * 当子应用已经渲染，则直接控制子应用进行内部跳转
     *
     * getActiveApps: 用于获取正在运行的子应用
     */
    console.log(96, '已经渲染的子应用', getActiveApps())
    // eslint-disable-next-line prefer-const
    let { appFrom: appName, path } = item
    console.log(114, '应用名和地址', appName, path)
    // 子应用未加载
    if (!getActiveApps().includes(appName)) {
      // 这里默认是hash, 初始化path 这里拼接一下hash值
      const pushPath = `/${appName}/#${path}`
      console.log('主应用控制跳转--------->')
      // 主应用跳转
      router.push(pushPath)
    }
    // 子应用已加载
    else {
      // 传递事件给子应用， 然后让子应用跳转
      console.log('子应用控制跳转--------->')
      // 向子应用传递路由 让子路由进行跳转
      microApp.setData(appName, { path: item.path })
    }
  }
  console.log('------------------------------------------------------------------')
}
</script>

<style
  scoped
  lang="scss"
>
.main-app-side-bar {
  width: 200px;
  height: 100%;
  //box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, .1);
  box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.1);
  padding-top: 20px;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
