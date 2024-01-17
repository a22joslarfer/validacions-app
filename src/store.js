import { defineStore } from 'pinia';

export const useStore = defineStore({
  id: 'main',
  state: () => ({
    peliculasFavoritas: [],
  }),

  actions: {
    agregarFavorito(pelicula) {
      if (!this.peliculasFavoritas.includes(pelicula)) {
        this.peliculasFavoritas.push(pelicula);
        this.actualizarLocalStorage();
      }
    },
    getTodasLasPeliculasFavoritas() {
      this.recuperarLocalStorage();
      return this.peliculasFavoritas;
    },
    limpiarListaDeFavoritos() {
      this.peliculasFavoritas = [];
      this.actualizarLocalStorage();
    },
    // Agrega estas funciones para manejar el almacenamiento local
    actualizarLocalStorage() {
      localStorage.setItem('peliculasFavoritas', JSON.stringify(this.peliculasFavoritas));
    },
    recuperarLocalStorage() {
      const storedPeliculas = localStorage.getItem('peliculasFavoritas');
      this.peliculasFavoritas = storedPeliculas ? JSON.parse(storedPeliculas) : [];
    },
  },
});
