import Vue from 'vue'
import Router from 'vue-router'
import Countries from '@/components/Countries.vue'
import ShowCountry from '@/components/ShowCountry.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Countries',
      component: Countries
    },
    {
      path: '/country/:name',
      name: 'ShowCountry',
      component: ShowCountry
    }
  ]
})
