import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { store } from './store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import home from "./components/home";
import second from "./components/second";
import api from "./components/EmployeeList";
import bootstrap from "./components/bootstrap";
import loginpage from "./components/loginpage";


Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const routes = [
  {
    path:'/', component: loginpage
  },
  {
    path: '/second', component: second
  },
  {
    path: '/api', component: api
  },
  {
    path: '/bootstrap',component: bootstrap
  },
  {
    path: '/home',component: home
  }
];

const router = new VueRouter({
  routes
});


new Vue({
  el: '#app',
  store: store,
  router,
  render: h => h(App)
})