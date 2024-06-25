import {fileURLToPath, URL} from "url"
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

let es_vue = {
    // 定义vue的别名，如果使用其他的插件，可能会用到别名
    'vue': 'vue/dist/vue.esm-bundler.js'
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    // server是在开发时解决跨域问题，生产环境一般是后端使用nginx反向代理来解决
    server: {
        // 代理，解决跨域问题，非生产端使用；生产环境下应使用nginx做代理
        proxy: {
            '/api': {
                target: "http://localhost:8080",
                // rewrite可以在向后台请求数据的时候省略/api
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        },
        host: '0.0.0.0'
    },
    // 文件路径替换
    resolve: {
        alias: [
            {find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url))},
        ]


    }
})
