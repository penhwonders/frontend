import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import VueSocialSharing from 'vue-social-sharing';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router/router';
import store from './plugins/appState';

// for social sharing
Vue.use(VueSocialSharing);

// and then use it in main.js
Vue.use(VueAnalytics, {
  id: "UA-186949747-1",
  router,
});
Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
