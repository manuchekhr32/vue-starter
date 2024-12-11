import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/pages/PIndex.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/PAbout.vue'),
  },
] as RouteRecordRaw[]
