Vue 3
========

一个vue3 学习demo项目，功能是后台管理系统

# 准备环境

  - 准备下载环境  
    cnpm安装： `npm install cnpm -g` *全局只需要一次安装就可以了*
  - 准备vite  
    vite安装： `cnpm -y create vite@latest`

# 创建项目

  ```shell
  cnpm create vite@latest vue-element-ui -- --template vue
  ```

# 组件

- vite: 脚手架  


- axios: 异步请求  
  `cnpm install axios`


- elementPlus: ui框架  
  `cnpm install element-plus --save` 
    
   后台管理系统也可以使用`ant design vue` 


- router: 路由     
`cnpm install vue-router@4`


- pinia: 跨component的数据状态管理器  
  `cnpm install pinia --legacy-peer-deps`


- tailwind: css样式库  
  `cnpm install -D tailwindcss postcss autoprefixer`


- echarts: 图表库  
  `cnpm i echarts vue-echarts`


- crypto-js: 加密组件, 用于密码的加密  
  `cnpm install crypto-js --save`

# 部署服务

## 开发
  
  ```shell
  npx vite
  ```

## 生产
  ```shell
  vite build
  ```

# 其他

## 密码加密方式

  使用SHA-256的方式进行加密
  ```javascript
CryptoJS.SHA256
```