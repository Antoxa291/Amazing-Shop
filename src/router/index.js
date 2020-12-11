import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Catalog",
    component: () =>
      import(/* webpackChunkName: "Catalog" */ "../views/Catalog.vue"),
      props: true
  
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import(/* webpackChunkName: "Cart" */ "../views/Cart.vue"),
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
