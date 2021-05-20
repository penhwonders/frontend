import vue from "vue";
import VueRouter from "vue-router";

//views
import Home from "../views/Home";
import About from "../views/About";
import Feedback from "../views/Feedback";
import AddUpdateEvent from "../views/AddUpdateEvent";
import Donation from "../views/Donation";
import Policy from "../views/Policy";
import Event from "../views/Event";

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
  {
    path: "/Donation",
    name: "Donation",
    component: Donation,
  },
  {
    path: "/Policy",
    name: "Policy",
    component: Policy,
  },
  {
    path: "/event/:id",
    component: Event,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
