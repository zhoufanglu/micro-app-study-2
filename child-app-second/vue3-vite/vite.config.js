import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { join } from "path";
import { writeFileSync } from "fs";
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    vue(),
    // 自定义插件
    (function () {
      let basePath = "";
      return {
        name: "child-app-1",
        apply: "build",
        configResolved(config) {
          console.log(24, config.base)
          console.log(24, config.build.assetsDir)
          basePath = `${config.base}${config.build.assetsDir}/`;
        },
        writeBundle(options, bundle) {
          for (const chunkName in bundle) {
            if (Object.prototype.hasOwnProperty.call(bundle, chunkName)) {
              const chunk = bundle[chunkName];
              if (chunk.fileName && chunk.fileName.endsWith(".js")) {
                chunk.code = chunk.code.replace(
                  /(from|import\()(\s*['"])(\.\.?\/)/g,
                  (all, $1, $2, $3) => {
                    return all.replace($3, new URL($3, basePath));
                  }
                );
                const fullPath = join(options.dir, chunk.fileName);
                writeFileSync(fullPath, chunk.code);
              }
            }
          }
        },
      };
    })(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/scss/entrance.scss" as *;`
      },
    },
    postcss: {
      plugins: [
        {
          postcssPlugin: 'internal:charset-removal',
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === 'charset') {
                atRule.remove();
              }
            }
          }
        }
      ]
    }
  },
  server: {
    host: '0.0.0.0',
    port: 4001
  },
  base: `${process.env.NODE_ENV === 'production' ? 'http://www.lufangzhou.top' : ''}/child-app-1/`,
  build: {
    sourcemap: true,
  }
  // base:'/child-app-1/',
});
