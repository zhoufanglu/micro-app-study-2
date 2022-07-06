const vue3Vite = () => import('@/views/microApps/vue3-vite.vue')
const bdcp = () => import('@/views/microApps/bdcp.vue')

const microApps = [
  {
    name: 'vue3Vite',
    // 👇 非严格匹配，/my-page/* 都指向 vue3-vite 页面
    path: '/child-app-1/:page*',
    component: vue3Vite
  },
  {
    name: 'bdcp',
    // 👇 非严格匹配，/my-page/* 都指向 vue3-vite 页面
    path: '/bdcp/:page*',
    component: bdcp
  }
]

export default microApps
