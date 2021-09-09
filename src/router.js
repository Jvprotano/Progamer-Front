import Vue from 'vue';
import Router from 'vue-router';

import Home from './pages/Home';
import InfoCurso from './pages/InfoCurso';
import Login from './pages/Login';
import RegisterCourse from './pages/RegisterCourse';

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
        component: Login

    },
    {
        path: '/registercourse',
        component: RegisterCourse
    }
 ]
});

export default router;