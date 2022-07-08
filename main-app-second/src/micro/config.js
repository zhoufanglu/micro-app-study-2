const config = {
  'child-app-1': 'http://localhost:4001',
  userManage: 'http://localhost:4004'
}
// 线上环境地址
console.log(5, process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
  // 基座应用和子应用部署在同一个域名下，这里使用location.origin进行补全
  Object.keys(config).forEach(key => {
    config[key] = window.location.origin
  })
}
export default config
