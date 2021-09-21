import Vue from 'vue';
import Router from 'vue-router';

import Home from './pages/Home';
import InfoCurso from './pages/InfoCurso';
import Login from './pages/Login';
import RegisterUser from './pages/RegisterUser';
import RegisterCourse from './pages/RegisterCourse'


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
    {
        path: '/registerUser',
        component: RegisterUser

    },
 ]
});

export default router;