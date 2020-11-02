import vue from "vue";
import VueRouter from "vue-router";

//views
import Home from "../views/Home";
import About from "../views/About";
import Category from "../views/Category";

vue.use(VueRouter);

// routes
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/About",
    name: "About",
    component: About,
  },
  {
    path: "/Category/:categorieName",
    props: true,
    name: "Category",
    component: Category,
  },
];

const router = new VueRouter({
  made: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
