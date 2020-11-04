import vue from "vue";
import VueRouter from "vue-router";

//views
import Home from "../views/Home";
import About from "../views/About";
import Feedback from "../views/Feedback";
import AddUpdateEvent from "../views/AddUpdateEvent";

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
    path: "/Feedback",
    name: "Feedback",
    component: Feedback,
  },
  {
    path: "/AddUpdateEvent",
    name: "AddUpdateEvent",
    component: AddUpdateEvent,
  },
];

const router = new VueRouter({
  made: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
