import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home';
import InfoCourse from './pages/InfoCourse';
import Login from './pages/Login';
import RegisterResearch from './pages/RegisterResearch';
import ShowResearch from './pages/ShowResearch';
import MySales from './pages/MySales';
import ListResearches from './components/ListResearches'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
  
        {
            path: '/',
            component: Home,
        },
        {
            path: '/infoCourse',
            component: InfoCourse,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
    
        },
      
        {
            path: '/registerResearch',
            component: RegisterResearch,

        },
    {
        path: '/showResearch',
        component: ShowResearch,
    },
    {
        path: '/ListResearches',
        component: ListResearches,
    },
    {
        path: '/mySales',
        component: MySales,
    },
 ]
});

export default router;