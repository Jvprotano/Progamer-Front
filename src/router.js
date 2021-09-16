import Vue from 'vue';
import Router from 'vue-router';

import Home from './pages/Home';
import InfoCurso from './pages/InfoCurso';
import Login from './pages/Login';
import RegisterCourse from './pages/RegisterCourse'
import Teste from './pages/Teste'
Vue.use(Router);

const router = new Router({
 mode: 'history',
 routes:[
     {
         path: '/',
         component: Home
     },
     {
        path: '/info',
        component: InfoCurso
    },
     {
        path: '/login',
        component: Login,
    
    },
    {
      path: '/teste',
      component: Teste,
    },
    {
        path: '/registercourse',
        component: RegisterCourse,
        /*Apenas exemplo para bloquear rotas...*/ 
       /* beforeEnter: (to, from, next) => {
            if (!localStorage.getItem("token")) {
              next("/login");
            } else {
              next();
            }

    }*/
    },
 ]
});

export default router;