import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // 设置 `@` 指向 `src` 目录
    },
  },
  base: "./", // 设置打包路径
  server: {
    port: 4000, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    proxy: {
      '/api/v1': {
        target: 'http://localhost:4010/', // 实际请求地址
        changeOrigin: true,
        // rewrite: (path) => path.replace('/api/v1', ""),
      },
    },
  },
})
