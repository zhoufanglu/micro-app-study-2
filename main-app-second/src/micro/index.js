import microApp from '@micro-zoe/micro-app'
// 微前端-microApp-注入
microApp.start({
  plugins: {
    modules: {
      // appName即应用的name值
      'child-app-1': [
        {
          loader(code) {
            if (process.env.NODE_ENV === 'development') {
              // 这里 basename 需要和子应用vite.config.js中base的配置保持一致
              // eslint-disable-next-line no-param-reassign
              code = code.replace(/(from|import)(\s*['"])(\/child-app-1\/)/g, all => {
                return all.replace('/child-app-1/', 'http://localhost:4001/child-app-1/')
              })
            }
            return code
          }
        }
      ],
      bdcp: [
        {
          loader(code) {
            if (process.env.NODE_ENV === 'development') {
              // 这里 basename 需要和子应用vite.config.js中base的配置保持一致
              // eslint-disable-next-line no-param-reassign
              code = code.replace(/(from|import)(\s*['"])(\/bdcp\/)/g, all => {
                return all.replace('/bdcp/', 'http://localhost:5001/bdcp/')
              })
            }
            return code
          }
        }
      ]
    }
  }
})
