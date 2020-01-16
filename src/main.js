import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
      name: "root"
    },
    {
      path: "/accueil",
      component: Home,
      name: "a"
    },
    {
      path: "/carte",
      component: Map,
      name: "b"
    },
    {
      path: "/legende",
      component: Legend,
      name: "c"
    }
  ]
});

import Home from "./components/Home.vue";
import Map from "./components/Map.vue";
import Legend from "./components/Legend.vue";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
