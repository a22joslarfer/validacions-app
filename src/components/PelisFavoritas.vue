
<template>
  <h3>PelisFavoritas</h3>
  <div>
    <h1>Favorite Movies</h1>
    <ul>
      <li v-for="pelicula in peliculasFavoritas" :key="pelicula.id">
        {{ pelicula.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore } from '@/store';

export default {
  name: 'FavoriteMovies',
  setup() {
    const store = useStore();
    const peliculasFavoritas = store.getTodasLasPeliculasFavoritas();

    return {
      peliculasFavoritas
    };
  }
};
</script>