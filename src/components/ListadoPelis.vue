<template>
  <h3>ListadoPelis</h3>
  <div>
    <ul>
      <li v-for="pelicula in peliculas" :key="pelicula.id">
        {{ pelicula.title }}
        <button @click="agregarFavorito(pelicula)">Agregar a favoritos</button>
      </li>
    </ul>
  </div>
</template>


<script>
import { useStore } from 'pinia';

export default {
  data() {
    return {
      peliculas: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('https://example.com/movies');
        this.peliculas = await response.json();
      } catch (error) {
        console.error(error);
      }
    },
    agregarFavorito(pelicula) {
      const store = useStore();
      store.agregarFavorito(pelicula);
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
  