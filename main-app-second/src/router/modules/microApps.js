const vue3Vite = () => import('@/views/microApps/vue3-vite.vue')
const bdcp = () => import('@/views/microApps/bdcp.vue')
const userManage = () => import('@/views/microApps/userManage.vue')

const microApps = [
  {
    name: 'vue3Vite',
    // 👇 非严格匹配，/my-page/* 都指向 vue3-vite 页面
    path: '/child-app-1/:page*',
    component: vue3Vite
  },
  {
    name: 'bdcp',
    path: '/bdcp/:page*',
    component: bdcp
  },
  {
    name: 'userManage',
    path: '/userManage/:page*',
    component: userManage
  }
]

export default microApps
