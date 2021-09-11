import Vue from 'vue';
import Router from 'vue-router';

import Home from './pages/Home';
import CursoInstrutor from './pages/CursoInstrutor';
import HistoricoFinanceiro from './pages/HistoricoFinanceiro';
import MinhasVendas from './pages/MinhasVendas';

Vue.use(Router);

const router = new Router({
 mode: 'history',
 routes:[
     {
         path: '/',
         component: Home
     },
     {
        path: '/cursosInstrutor',
        component: CursoInstrutor
    },
    {
        path: '/historicoFinanceiro',
        component: HistoricoFinanceiro
    },
    {
        path: '/minhasVendas',
        component: MinhasVendas
    }
 ]
});

export default router;