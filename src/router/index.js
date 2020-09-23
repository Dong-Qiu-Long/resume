import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/subentry',
    name: 'subentry',
    component: () => import('@/components/right/subentry.vue'),
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: () => import('@/components/right/blogs.vue'),
  }, {
    path: '/practice',
    name: 'practice',
    component: () => import('@/components/right/practice.vue'),
  }, {
    path: '/exercise',
    name: 'exercise',
    component: () => import('@/components/right/exercise.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
