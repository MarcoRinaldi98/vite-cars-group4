import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import CarsList from './pages/CarsList.vue';


const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'home',
                component: AppHome
            },{
                path: '/Lista',
                name: 'lista',
                component: CarsList
            },{
                path: '/Lista/:id',
                name: 'SingleCar',
                component: SingleCar
            }
        ]
    }
);

export { router };