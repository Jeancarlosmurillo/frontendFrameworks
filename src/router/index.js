import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import VerifyEmailView from '../views/VerifyEmailView.vue'
import DashboardView from '../views/DashboardView.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/register', name: 'Register', component: RegisterView },
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/verify-email', name: 'VerifyEmail', component: VerifyEmailView },
  { path: '/dashboard', name: 'Dashboard', component: DashboardView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
