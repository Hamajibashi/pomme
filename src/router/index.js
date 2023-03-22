import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontEnd/FrontLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/FrontEnd/HomeView.vue')
      },
      {
        path: 'menu',
        component: () => import('../views/FrontEnd/MenuView.vue')
      },
      {
        path: 'access',
        component: () => import('../views/FrontEnd/AccessView.vue')
      },
      {
        path: 'news',
        component: () => import('../views/FrontEnd/ArticlesView.vue')
      },
      {
        path: 'news/:id',
        component: () => import('../views/FrontEnd/ArticleView.vue')
      },
      {
        path: 'products',
        component: () => import('../views/FrontEnd/ProductsView.vue')
      },
      {
        path: 'product/:id',
        component: () => import('../views/FrontEnd/ProductView.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/FrontEnd/CartView.vue')
      },
      {
        path: 'checkorder',
        component: () => import('../views/FrontEnd/CheckOrderView.vue')
      },
      {
        path: 'checkout/:id',
        component: () => import('../views/FrontEnd/CheckOutView.vue')
      },
      {
        path: 'checkout',
        component: () => import('../views/FrontEnd/CheckOutView.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/BackEnd/BackLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/BackEnd/AdminDashboard.vue')
      },
      {
        path: 'products',
        component: () => import('../views/BackEnd/AdminProductsView.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/BackEnd/AdminOrdersView.vue')
      },
      {
        path: 'articles',
        component: () => import('../views/BackEnd/AdminArticlesView.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/BackEnd/AdminCouponsView.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/FrontEnd/LoginView.vue')
  },
  {
    path: '/:pathMath(.*)*',
    component: () => import('../views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
