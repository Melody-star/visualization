import * as vueRouter from "vue-router";
import StartVue from "../components/start/Start.vue";

const CampusOverview1 = () =>
  import(
    /*webpackChunkName:'CampusOverview'*/ "../components/one/CampusOverview.vue"
  );

const EarlyWarn1 = () =>
  import(/*webpackChunkName:'EarlyWarn'*/ "../components/two/EarlyWarn.vue");

const Distribute1 = () =>
  import(
    /*webpackChunkName:'Distribute'*/ "../components/three/Distribute.vue"
  );

const routes = [
  {
    path: "/",
    name: "StartVue",
    component: StartVue,
  },
  {
    path: "/CampusOverview",
    name: "CampusOverviewVue",
    component: CampusOverview1,
  },
  {
    path: "/EarlyWarn",
    name: "EarlyWarn",
    component: EarlyWarn1,
  },
  {
    path: "/Distribute",
    name: "Distribute",
    component: Distribute1,
  },
];

const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  routes: routes,
});
export default router;
