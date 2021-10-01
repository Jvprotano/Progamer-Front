import Vue from "vue";
import Router from "vue-router";
import Login from "../modules/auth/pages/Login";
import Home from '../pages/Home'
import InfoCourse from '../pages/InfoCourse'

import getters from "../modules/auth"
Vue.use(Router);
function guardMyroute(to, from, next)
{
if(localStorage.token != null)
  getters.isAuthenticated = true;
 else
 getters.isAuthenticated = false;
 if(getters.isAuthenticated) 
 {
  next({name: 'home'}); 
 } 
 else
 {
  next(); 
 }
}
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {title: 'Home'}
    },
    {
      path: "/login",
      name: "login",
      beforeEnter : guardMyroute,
      component: Login,
      meta: {title: 'Login'}
    },
    {
            path: '/infoCourse/:id',
            name: 'infoCourse',
            component: InfoCourse,
        },

  ]
});