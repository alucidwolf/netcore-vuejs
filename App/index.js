import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import ToggleButton from "vue-js-toggle-button";

import App from './App.vue'
import HomePage from './Components/Home/Home.vue'
import Eproposal from './Components/Eproposal/Eproposal.vue'
import Property from './Components/Property/Property.vue'
import Landing from './Components/Landing/Landing.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-croppa/dist/vue-croppa.css'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(ToggleButton)

const routes = [{
  path: '/',
  component: App,
  children: [{
    path: '',
    component: Landing
  }, {
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

const store = new Vuex.Store({
  state: {
    selectedProperty: ''
  },
  mutations: {
    updatePropertySelected(state, n) {
      state.selectedProperty = n
    }
  },
  getters: {
    getCurrentPropertySelected(state) {
      return state.selectedProperty
    }
  }
})

const app = new Vue({
  router,
  store,
  template: '<div><router-view></router-view></div>'
}).$mount('#app')
