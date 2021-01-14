import { createWebHistory, createRouter } from "vue-router";
import DOSCG from "@/views/DOSCG.vue";
import Cv from "@/views/Cv.vue";
import FindBc from "@/views/FindBc.vue";
import Findxyz from "@/views/Findxyz.vue";

const routes = [
  {
    path: "/",
    name: "DOSCG",
    component: DOSCG,
    meta: {
      layout: 'AppLayoutMain'
    }
  },
  {
    path: "/cv",
    name: "Cv",
    component: Cv,
    meta: {
      layout: 'AppLayoutMain'
    }
  },
  {
    path: "/find-bc",
    name: "FindBc",
    component: FindBc,
    meta: {
      layout: 'AppLayoutMain'
    }
  },
  {
    path: "/find-xyz",
    name: "Findxyz",
    component: Findxyz,
    meta: {
      layout: 'AppLayoutMain'
    }
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/DOSCG.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;