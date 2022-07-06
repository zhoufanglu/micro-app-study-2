import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// 打包分析插件 - visualizer
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd()) // 获取.env文件里定义的环境变量
  return defineConfig({
    base: '/main-app/',
    plugins: [
      vue({
        template: {
          compilerOptions: {
            // 注册自定义组件micro-app 防止控制台警告
            isCustomElement: tag => /^micro-app/.test(tag)
          }
        }
      }),
      visualizer({ open: false, brotliSize: true, filename: 'report.html' })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@a': path.resolve(__dirname, 'src/assets'),
        '@c': path.resolve(__dirname, 'src/components')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 全局引入scss入口
          additionalData: `
          @use "@/styles/scss/entrance.scss" as *;
          `
        }
      }
    },
    server: {
      port: 3000
    },
    build: {
      sourcemap: true,
      rollupOptions: {
        output: {
          // entryFileNames: env.VITE_OUTPUT_DIR
        }
      },
      // 生产环境构建文件的目录 default: dist
      outDir: env.VITE_OUTPUT_DIR,
      // 放置生成的静态文件目录（js css img）
      assetsDir: 'static'
    }
  })
}
