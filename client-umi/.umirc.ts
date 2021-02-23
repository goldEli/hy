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
    {
      path: '/RegionManagement',
      component: '@/pages/RegionManagement',
      title: 'Region Management',
    },
    {
      path: '/buildingManagement',
      component: '@/pages/BuildingManagement',
      title: 'Building Management',
    },
    {
      path: '/imageManagement',
      component: '@/pages/imageManagement',
      title: 'Image Management',
    },
  ],
  fastRefresh: {},
});
