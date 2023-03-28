import Vue from 'vue'
import Router from "vue-router";
import NotFound from "@/pages/NotFound.vue";
import Main from "@/pages/Main.vue";
import Reasons from "@/pages/Reasons.vue";
import TestTask from "@/pages/TestTask.vue";
import Graph from "@/pages/Graph.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "main",
      component: Main,
    },
    {
      path: "/reasons",
      name: "reasons",
      component: Reasons,
    },
    {
      path: "/testTask",
      name: "testTask",
      component: TestTask,
    },
    {
      path: "/graph",
      name: "graph",
      component: Graph,
    },
    {
      path: "/:pathMatch(.*)*", //Для обработки запросов к несуществующим ресурсам
      name: "notFound",
      component: NotFound,
    },
  ],
});

export default router;