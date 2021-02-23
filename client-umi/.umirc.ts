import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/login', component: '@/pages/login', title: 'Login' },
    {
      path: '/userManagement',
      component: '@/pages/userManagement',
      title: 'User Management',
    },
  ],
  fastRefresh: {},
});
