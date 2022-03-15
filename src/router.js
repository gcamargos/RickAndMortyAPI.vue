// criando as rotas do projeto
import {
    createRouter,
    createWebHistory
} from "vue-router";
import Armazem from './views/ArmazemUser.vue'
import Main from './views/Home.vue'
const routes = [
    {
    path: '/armazem',
    name: 'armazem',
    component: Armazem
},
    {
    path: '/',
    name: 'home',
    component: Main
}
]

const router = createRouter({
    history: createWebHistory(),
    routes

})

export default router;