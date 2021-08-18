import Vue from 'vue';
import Router from 'vue-router';

import Home from './pages/Home';


Vue.use(Router);

const router = new Router({
 mode: 'history',
 routes:[
     {
         path: '/',
         component: Home
     }
 ]
});

export default router;