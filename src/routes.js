import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/home-page.vue'
import AboutPage from './pages/about-page.vue'
import CategoryPage from './pages/category-page.vue'
import ProductDetailPage from './pages/product-detail-page.vue'
import HelpPage from './pages/help-page.vue'
import PrivacyPage from './pages/privacy-policy-page.vue'
import NotFoundPage from './pages/not-found-404-page.vue'
import adminPanelPage from './pages/admin-panel-page.vue'

const routerHash = createWebHistory() // добавляет # (хэш) в url (нужен если нет хоста, либо нельзя настроить конфигурацию на сервере)
const router = createRouter({
  history: routerHash,
  routes: [
    {
      path: '',
      name: 'home',
      component: HomePage,
      // alias: ''
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/help',
      name: 'help',
      component: HelpPage
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyPage
    },
    {
      path: '/admin',
      name: 'admin',
      component: adminPanelPage
    },
    {
      path: '/product/:id(\\d+)',
      name: 'product',
      component: ProductDetailPage,  
    },
    {
      path: '/category/:category(.*)',
      name: 'category',
      component: CategoryPage,  
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: NotFoundPage
    }
  ],
})

export default router
