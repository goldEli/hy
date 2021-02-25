import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    type: 'hash',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/userManagement',
      title: '用户管理',
    },
    { path: '/login', component: '@/pages/login', title: 'Login' },
    {
      path: '/regionManagement',
      component: '@/pages/RegionManagement',
      title: '区域管理',
    },
    {
      path: '/buildingManagement',
      component: '@/pages/BuildingManagement',
      title: '建筑管理',
    },
    {
      path: '/imageManagement',
      component: '@/pages/imageManagement',
      title: '图片管理',
    },
    {
      path: '/showImages',
      component: '@/pages/showImages',
      title: '图片展示',
    },
    {
      path: '/showBuildings',
      component: '@/pages/showBuildings',
      title: '建筑列表',
    },
  ],
  fastRefresh: {},
});
