import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/sass/__main.scss'
import VueResizeText from 'vue-resize-text'
Vue.use(VueResizeText)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
