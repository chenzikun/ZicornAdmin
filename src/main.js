import {createApp} from 'vue/dist/vue.esm-bundler'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import {createPinia} from 'pinia'

import App from './App.vue'
import './styles/index.css'

// 路由
import {router} from '@/router'
// api
axios.defaults.baseURL = 'http://localhost:8080/api';


const setupAll = async () => {
    const pinia = createPinia()
    const app = createApp(App)
    // 使用路由
    app.use(router)
    // ElementUI
    app.use(ElementPlus)
    // 使用pinia
    app.use(pinia)
    // 全局配置$axios
    app.provide('$axios', axios) //修改内部的http为axios
    app.config.globalProperties.$axios = axios;
    // mount
    app.mount('#app')
}


setupAll()