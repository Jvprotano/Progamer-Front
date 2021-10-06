import Vue from "vue";
import Router from "vue-router";
import Login from "../modules/auth/pages/Login";
import Home from '../pages/Home'
import InfoCourse from '../pages/InfoCourse'
import RegisterUser from '../pages/RegisterUser'
import RegisterCourse from '../pages/RegisterCourse'
import RegisterCard from '../pages/RegisterCard'

import getters from "../modules/auth"
Vue.use(Router);
function cantBeLogged(to, from, next) {
  if (localStorage.token != null)
    getters.isAuthenticated = true;
  else
    getters.isAuthenticated = false;
  if (getters.isAuthenticated) {
    next({ name: 'home' });
  }
  else {
    next();
  }
}

function onlyAuthorized(to, from, next) {
  if (localStorage.token != null)
    getters.isAuthenticated = true;
  else
    getters.isAuthenticated = false;
  if (!getters.isAuthenticated) {
    next({ name: 'login' });
  }
  else {
    next();
  }
}

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { title: 'Home' }
    },

    {
      path: '/registerUser',
      component: RegisterUser,
      beforeEnter: cantBeLogged,
    },

    {
      path: "/login",
      name: "login",
      beforeEnter: cantBeLogged,
      component: Login,
      meta: { title: 'Login' }
    },
    {
      path: '/infoCourse/:id',
      name: 'infoCourse',
      component: InfoCourse,
    },
    {
      path: '/registerCourse',
      component: RegisterCourse,
      beforeEnter: onlyAuthorized,
    },
    {
      path: '/RegisterCard',
      component: RegisterCard,
  },

  ]
});