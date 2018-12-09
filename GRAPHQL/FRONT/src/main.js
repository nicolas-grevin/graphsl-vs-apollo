import Vue from 'vue'
import App from '@/App.vue'
import VueResource from 'vue-resource';
import Paginate from 'vuejs-paginate'
import router from '@/router'
import store from '@/store/index'

Vue.use(VueResource);
Vue.component('paginate', Paginate)

Vue.config.productionTip = false

Vue.http.options.emulateJSON = true;
Vue.http.options.emulateHTTP = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
