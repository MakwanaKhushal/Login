import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "HomePage",
    redirect: "/homePage",
  },
  {
    path: "/loginPage",
    name: "LoginPage",
    component: () => import("../components/LoginPage.vue"),
  },
  {
    path: "/deshBoard",
    name: "DeshBoard",
    component: () => import("../components/DeshBoard.vue"),
  },
  {
    path: "/newsPage",
    name: "NewsPage",
    component: () => import("../components/NewsPage.vue"),
  },
  {
    path: "/helloWorld",
    name: "HelloWorld",
    component: () => import("../components/HelloWorld.vue"),
  },
  {
    path: "/tags",
    name: "Tags",
    component: () => import('@/components/Tags.vue'),
  },
  {
    path: "/homePage",
    name: "HomePage",
    component: () => import("./HomePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
