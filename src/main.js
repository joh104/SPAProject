import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import VModal from 'vue-js-modal'
import axios from 'axios'

import { routes } from './routes.js'

Vue.use(VModal, {dialog: true, dynamic: true})

Vue.config.productionTip = false

Vue.use(VueRouter);

axios.defaults.baseURL = 'http://localhost:5000'

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
}).$mount('#app')
