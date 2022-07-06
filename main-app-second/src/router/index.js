import { createRouter, createWebHistory } from 'vue-router'
// 模块引入
import test from '@/router/modules/test'
import microApps from '@/router/modules/microApps'

// 布局页面
const layout = () => import('@/layout/layout.vue') // 作业管理

const routes = [
  {
    path: '/layout',
    component: layout,
    name: 'layout',
    children: [...test, ...microApps]
  },
  {
    path: '/',
    redirect: '/page-A'
  }
]
// console.log(103, routes)
const router = createRouter({
  // history模式
  history: createWebHistory(import.meta.env.BASE_URL),
  routes // `routes: routes` 的缩写
})

export default router
