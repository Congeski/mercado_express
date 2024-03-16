import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import ClosingView from '@/views/ClosingView.vue'
import HomeView from '@/views/HomeView.vue'
import AdminView from '@/views/AdminView.vue'
import SellerView from '@/views/SellerView.vue'
import CashierView from '@/views/CashierView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/closing', name: 'fechamento', component: ClosingView },
    { path: '/adminView', name: 'adminView', component: AdminView },
    { path: '/sellerView', name: 'sellerView', component: SellerView },
    { path: '/cashierView', name: 'cashierView', component: CashierView},
  ]
});

export default router
