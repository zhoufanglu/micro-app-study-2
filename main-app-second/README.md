## Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Project setup
```
npm install
```

## Compiles and hot-reloads for development
```
npm run dev
```

### 打包
| 命令   | 环境       | 包名                                     |
|------|----------|----------------------------------------|
| `npm run build` | 同时打生产和测试 | dist/dist_production && pack/dist_test |
| `npm run build: test` | 测试       | dist/dist_test                         |
| `npm run build: production` | 生产       | dist/dist_production                   |

## api-axios
* `src/request`

## pinia
* 代替vuex，这里用了本地存储
* `src/store`

## scss
* 入口`src/styles/scss/entrance.scss`
* 主题色统一为`$theme`变量.

## 主题色修改
* scss主题 `src/styles/scss/global.scss`内，`$theme`变量。
* 为了适配主题，element-plus暂时没有使用按需引入 详见 [issues](https://github.com/antfu/unplugin-vue-components/issues/242)

## 模块化
* 路由、接口、pinia 注意分模块。

## prettier && eslint 配置
* `.eslintrc.js` && prettier.config.js

## 微应用注意点
* 主应用使用`history`, 子应用使用`hash`路由。
```结构
└─ main-app
    └─child-app-1
    └─child-app-2
    └─bdcp
```
