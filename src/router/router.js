import vue from "vue";
import VueRouter from "vue-router";

//views
import Home from "../views/Home";
import About from "../views/About";

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
];

const router = new VueRouter({
  made: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
