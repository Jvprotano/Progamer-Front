import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home';
import InfoCourse from './pages/InfoCourse';
import Login from './pages/Login';
import RegisterUser from './pages/RegisterUser';
import RegisterCourse from './pages/RegisterCourse';
import CourseInstructor from './pages/CourseInstructor';
import HistoryFinancial from './pages/HistoryFinancial';
import MySales from './pages/MySales';
import RegisterCard from './pages/RegisterCard';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
  
        {
            path: '/',
            component: Home,
        },
        {
            path: '/infoCourse/:id',
            name: 'infoCourse',
            component: InfoCourse,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
    
        },
        {
            path: '/registerCourse',
            component: RegisterCourse,
       
        },
        {
            path: '/registerUser',
            component: RegisterUser,

        },
    {
        path: '/courseInstructor',
        component: CourseInstructor,
    },
    {
        path: '/historyFinancial',
        component: HistoryFinancial,
    },
    {
        path: '/mySales',
        component: MySales,
    },
    {
        path: '/RegisterCard',
        component: RegisterCard,
    },
 ]
});

export default router;