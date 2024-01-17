<template>
  <h3>PelisFavoritas</h3>

  <div>
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
  setup() {
    const store = useStore(); 

    const peliculasFavoritas = store.getTodasLasPeliculasFavoritas();

    return {
      peliculasFavoritas,
      store 
    };
  },
 
};
</script>

<style>
button {
  background-color: rgb(214, 196, 196);
  padding: 10px;
}
</style>