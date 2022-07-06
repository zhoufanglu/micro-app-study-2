import { createApp } from "vue";
import App from "./App.vue";
import router from './router'


// 监听基座下发的数据变化
// console.log(6, window)
if(window.eventCenterForChildApp_1){
  window.eventCenterForChildApp_1.addDataListener((data) => {
    // 当基座下发跳转指令时进行跳转
    if (data.path && typeof data.path === 'string') {
      data.path = data.path.replace(/^#/, '')
      console.log(13, router.currentRoute.value.path)
      // 当基座下发path时进行跳转
      if (data.path && data.path !== router.currentRoute.value.path) {
        console.log('child-app-1响应事件', data)
        router.push(data.path)
      }
      console.log('------------------------')
    }
  }, true)
}




let app = createApp(App);
app.use(router);
app.mount("#child-app-1");
