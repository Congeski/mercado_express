import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import ClosingView from '@/views/ClosingView.vue'
import HomeView from '@/views/HomeView.vue'
import AdminView from '@/views/AdminView.vue'
import SellerView from '@/views/SellerView.vue'
import CashierView from '@/views/CashierView.vue'
import StockView from '@/views/StockView.vue'
import SalesView from '@/views/SalesView.vue'
import EmployeesView from '@/views/EmployeesView.vue'
import SuppliersView from '@/views/SuppliersView.vue'
import ReportView from '@/views/ReportView.vue'
import AddProdutoView from '@/views/AddProdutoView.vue'
import RemoveProdutoView from '@/views/RemoveProdutoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/closing', name: 'fechamento', component: ClosingView },
    { path: '/adminView', name: 'adminView', component: AdminView },
    { path: '/sellerView', name: 'sellerView', component: SellerView },
    { path: '/cashierView', name: 'cashierView', component: CashierView },
    { path: '/stockView', name: 'stockView', component: StockView },
    { path: '/salesView', name: 'salesView', component: SalesView },
    { path: '/employeesView', name: 'employeesView', component: EmployeesView },
    { path: '/suppliersView', name: 'suppliersView', component: SuppliersView },
    { path: '/reportView', name: 'reportView', component: ReportView },
    { path: '/addProdutoView', name: 'addProdutoView', component: AddProdutoView },
    { path: '/removeProdutoView', name: 'removeProdutoView', component: RemoveProdutoView }
  ]
});

export default router
