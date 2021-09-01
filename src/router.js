import Vue from 'vue';
import Router from 'vue-router';

import Home from './pages/Home';
import PageInstrutor from './pages/PageInstrutor';

Vue.use(Router);

const router = new Router({
 mode: 'history',
 routes:[
     {
         path: '/',
         component: Home
     },
     {
        path: '/pageInstrutor',
        component: PageInstrutor
    }
 ]
});

export default router;