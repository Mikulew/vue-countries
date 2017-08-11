import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

Vue.use(VueResource);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
