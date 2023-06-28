import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/Home.vue'),
      children: [
        { path: '/Test1', component: () => import('../components/Test1.vue') },
        { path: '/Page1', component: () => import('../components/Page1.vue') },
        { path: '/page2', component: () => import('../components/Page2.vue') }
      ]
    }
  ]
});
export default router;
