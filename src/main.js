import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import TableComponent from 'vue-table-component';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(TableComponent);

Vue.directive("index", {
  bind(el, binding, vnode){
    if (vnode < 10) {
      vnode = "00" + vnode;
    } else if (el > 10 && vnode < 100) {
      vnode = "0" + vnode;
    } else {
      vnode
    }
  }
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
