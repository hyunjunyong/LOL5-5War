import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store';
import vuetify from './plugins/vuetify';
import common from './utils/common';
import axios from './utils/axios';
Vue.config.productionTip = false;

Vue.prototype.$common = common;
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
