/**
 * api接口的统一出口
 */
// 动态加载模块-webpakc
/* const ms = require.context('./module', false, /\.js$/)
const modules = {}
ms.keys().forEach(k => {
  const n = k.substring(2, k.length - 3)
  modules[n] = ms(k).default
}) */
// 动态加载模块
const ms = import.meta.globEager('./module/*.js')
const modules = {}

Object.keys(ms).forEach(key => {
  const moduleName = key.substring(9, key.length - 3)
  modules[moduleName] = ms[key].default
})

// 导出接口
export default {
  ...modules
  // ……
}
