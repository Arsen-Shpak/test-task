import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import Vue2TouchEvents from "vue2-touch-events";
import "@/styles/styles/styles.scss";
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");

Vue.use(Vue2TouchEvents);