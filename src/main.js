import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import "./element/dark.css"

// 插件必须在挂载前注册，否则无法注入到根组件。
const app = createApp(App)

app.use(createPinia())   // 先装Pinia
app.use(router)          // 再装路由
app.mount('#app')          // 最后挂载
