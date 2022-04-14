import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddToDo from "../views/AddToDo.vue";
import TaskList from "../views/TaskList.vue";
import ContactUs from "../views/ContactUs.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/addtask",
    name: "addtask",
    component: AddToDo,
  },
  {
    path: "/tasklist",
    name: "tasklist",
    component: TaskList,
  },
  {
    path: "/contactus",
    name: "contactus",
    component: ContactUs,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
