import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import About from "../views/About.vue";
import EventDetails from "../views/EventDetails.vue";
import EventCreate from '../views/EventCreate.vue';
import AddCategories from '../views/AddCategories.vue';

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: '/event/:id',
    name: "EventDetails",
    props: true,
    component: EventDetails, 
  },
  {
    path: '/create/',
    name: "EventCreate",
    store: true,
    component: EventCreate, 
  },
  {
    path: '/categories/',
    name: "AddCategories",
    store: true,
    component: AddCategories, 
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
