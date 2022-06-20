import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllcharactersView from "../views/AllcharactersView";
import StaffView from "../views/StaffView";
import StudentsView from "../views/StudentsView";
import HouseView from "../views/HouseView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: "/house",
    name: 'house',
    component: HouseView
  },

  {
    path: "/staff",
    name: 'staff',
    component: StaffView
  },

  {
    path: "/students",
    name: 'students',
    component: StudentsView
  },

  {
    path: "/all",
    name: 'all',
    component: AllcharactersView.vue
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
