import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";
import Line from "../views/Line.vue";
import Bar from "../views/Bar.vue";
import Doughnut from "../views/Doughnut.vue";
import Pie from "../views/Pie.vue";
import Radar from "../views/Radar.vue";
import RadialBar from "../views/RadialBar.vue";
import PolarArea from "../views/PolarArea.vue";
import Bubble from "../views/Bubble.vue";
import Scatter from "../views/Scatter.vue";
import HeatMap from "../views/HeatMap.vue";
import TreeMap from "../views/TreeMap.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/line",
      name: "Line",
      component: Line,
    },
    {
      path: "/bar",
      name: "Bar",
      component: Bar
    },
    {
      path: "/doughnut",
      name: "Doughnut",
      component: Doughnut
    },
    {
      path: "/pie",
      name: "Pie",
      component: Pie
    },
    {
      path: "/radar",
      name: "Radar",
      component: Radar
    },
    {
      path: "/radialbar",
      name: "RadialBar",
      component: RadialBar
    },
    {
      path: "/polar-area",
      name: "PolarArea",
      component: PolarArea
    },
    {
      path: "/bubble",
      name: "Bubble",
      component: Bubble
    },
    {
      path: "/scatter",
      name: "Scatter",
      component: Scatter
    },
    {
      path: "/heatmap",
      name: "HeatMap",
      component: HeatMap
    },
    {
      path: "/treemap",
      name: "TreeMap",
      component: TreeMap
    }
  ]
})

export default router
