import Vue from 'vue'
import VueRouter from 'vue-router'
import LogInView from '@/views/LogInView'
import SignUpView from '@/views/SignUpView'
import HomeView from '@/views/HomeView.vue'
import ListaMateriasView from '@/components/ListaMateriasView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LogInView
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUpView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/lista-de-materias',
    name: 'listaMaterias',
    component: ListaMateriasView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
