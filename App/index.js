import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'
import HomePage from './Components/Home/Home.vue'
import Eproposal from './Components/Eproposal/Eproposal.vue'
import Property from './Components/Property/Property.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-croppa/dist/vue-croppa.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)

const routes = [{
  path: '/',
  component: App,
  children: [{
    path: 'homepage',
    component: HomePage
  }, {
    path: 'property',
    component: Property
  }, {
    path: 'eproposal',
    component: Eproposal
  }]
}]

const router = new VueRouter({
  routes,
  mode: 'history'
})

const app = new Vue({
  router,
  template: '<div><router-view></router-view></div>'
}).$mount('#app')
