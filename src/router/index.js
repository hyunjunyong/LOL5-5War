import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'hash', //해쉬값 제거 방식
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: () => import('../views/mainPage.vue'),
    },
    {
      path: '/datatable',
      name: 'datatable',
      component: () => import('../views/dataTable.vue'),
    },
    {
      path: '/teambuild',
      name: 'teambuild',
      component: () => import('../views/teamBuild.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    window.scrollTo(0, 0);
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
