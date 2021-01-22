import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router/router';
import store from './plugins/appState'
import VueAnalytics from 'vue-analytics';
//and then use it in main.js
Vue.use(VueAnalytics, {
    id: 'UA-186949747-1',
    router
})
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
