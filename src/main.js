import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/accueil",
      component: Home
    },
    {
      path: "/carte",
      component: Map
    },
    {
      path: "/legende",
      component: Legend
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
