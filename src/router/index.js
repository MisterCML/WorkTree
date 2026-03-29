import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import VisionMission from '../views/VisionMission.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/projects', name: 'projects', component: Projects },
  { path: '/vision', name: 'vision', component: VisionMission },
  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})
