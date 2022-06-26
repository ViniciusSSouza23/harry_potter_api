import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AllcharactersView from "../views/AllcharactersView";
import StaffView from "../views/StaffView";
import StudentsView from "../views/StudentsView";
import HouseView from "../views/HouseView";
import CorvinalView from "../views/houses/CorvinalView";
import GrifinoriaView from "../views/houses/GrifinoriaView";
import LufalufaView from "../views/houses/LufalufaView";
import SonserineView from "../views/houses/SonserineView";

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
    path: "/allperson",
    name: 'all',
    component: AllcharactersView
  },
  {
    path: "/sonserine",
    name:"sonserine",
   component: SonserineView
  },
  {
    path: "/grifinoria",
    name:"grifinoria",
   component: GrifinoriaView
  },
  {
    path: "/lufa-lufa",
    name:"lufa-lufa",
   component: LufalufaView
  },
  {
    path: "/corvinal",
    name:"corvinal",
   component: CorvinalView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
