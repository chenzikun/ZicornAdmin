import { createMemoryHistory, createRouter } from 'vue-router'


import HomeView from '@/views/HomeView.vue'
import LoginView from "@/views/Authorization/LoginView.vue";
import RegisterView from "@/views/Authorization/RegisterView.vue";
import RootView from "@/views/RootView.vue";
import UsersView from "@/views/Dashbord/UsersView.vue";


// const root = {template: '<h1>ROOT</h1>'}


const routes = [
    {path: '/', component: RootView },
    {path: '/home', component: HomeView },
    {path: '/user/login', component: LoginView },
    {path: '/user/register', component: RegisterView },
    {path: '/users', component: UsersView },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes: routes
})

