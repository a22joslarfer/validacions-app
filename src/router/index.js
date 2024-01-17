import { createRouter, createWebHistory } from 'vue-router';
import ListadoPelis from '../components/ListadoPelis.vue';
import PelisFavoritas from '../components/PelisFavoritas.vue';

const routes = [
  {
    path: '/todasLasPeliculas',
    name: 'todasLasPeliculas',
    component: ListadoPelis,
  },
  {
    path: '/todasLasPeliculasFavoritas',
    name: 'todasLasPeliculasFavoritas',
    component: PelisFavoritas,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL || '/'),
  routes,
});

export default router;