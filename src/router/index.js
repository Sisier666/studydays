import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Projects from '@/views/Projects.vue';
import Contact from '@/views/Contact.vue';


const routes = [
    // component 参数指定的组件y已经在 App.vue 中被 <RouterView> 渲染了
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/contact', component: Contact }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
