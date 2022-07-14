import {
  createRouter,
  createWebHashHistory,
} from "vue-router";

// 1. 定义路由组件， 注意，这里一定要使用 文件的全名（包含文件后缀名）
const HelloWorld = () => import('../components/HelloWorld.vue')
const childRoute = () => import('../views/childRoute.vue')
// 2. 定义路由配置
const routes = [
  { path: "/", redirect: "/HelloWorld" },
  {
    path: "/HelloWorld", name: "HelloWorld", component: HelloWorld,
    /*children: [
      { path: "/HelloWorld/childRoute", name: "childRoute", component: childRoute },
    ]*/
  },
  {
    path: "/HelloWorld/childRoute", name: "childRoute", component: childRoute,
  }
];

// 3. 创建路由实例
const router = createRouter({
  // 4. 采用hash 模式
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
