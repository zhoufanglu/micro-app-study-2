import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
// element-theme
import './styles/scss/element/index.scss'
// 注入micro-app
import '@/micro/index.js'

// store
import { setupStore } from './store'

const app = createApp(App)
setupStore(app)

app.use(ElementPlus)

app.use(router).mount('#app')
