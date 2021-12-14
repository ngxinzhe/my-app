import Vue from "vue";
import App from "./App.vue";
import { store } from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  el: "#app",
  store: store,
  render: (h) => h(App),
});
