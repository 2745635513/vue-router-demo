import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { addRoutes } from "./router/dynamicRoute";

import "./assets/style/index.css";

Vue.config.productionTip = false;

const vue = new Vue({
  router,
  render: h => h(App)
})
vue.$mount("#app");
// 添加路由
addRoutes(vue)
