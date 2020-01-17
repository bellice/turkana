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
      component: NavigationHome,
      name: "root"
    },
    {
      path: "/accueil",
      component: NavigationHome,
      name: "a"
    },
    {
      path: "/carte",
      component: NavigationMap,
      name: "b"
    },
    {
      path: "/legende",
      component: NavigationLegend,
      name: "c"
    }
  ]
});

import NavigationHome from "./components/NavigationHome.vue";
import NavigationMap from "./components/NavigationMap.vue";
import NavigationLegend from "./components/NavigationLegend.vue";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
