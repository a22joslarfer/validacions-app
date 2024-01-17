import { defineStore } from 'pinia';


export const useStore = defineStore({
  id: 'main',
  state: () => ({
   peliculasFavoritas: [],
  }),

  actions: {
  agregarFavorito(pelicula){
    this.peliculasFavoritas.push(pelicula);
  },
  getTodasLasPeliculasFavoritas(){
    return this.peliculasFavoritas;
  },
  },


});