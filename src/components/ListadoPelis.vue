<template>
  <h3>ListadoPelis</h3>
  <div>
    <ul>
      <div v-for="pelicula in peliculas" :key="pelicula.id" class="movie-item">
        <span class="movie-info">
          {{ pelicula.id }}
          {{ pelicula.title }}
          {{ pelicula.director }}
          {{ pelicula.releaseYear }}
          {{ pelicula.genre }}
          {{ pelicula.rating }}
        </span>
        <button @click="agregarFavorito(pelicula)" class="favorite-button">Agregar a favoritos</button>
      </div>
    </ul>
  </div>
</template>

<style>
.movie-item {
  margin-bottom: 10px;
  padding: 10px;
  font-size: 20px;
  background-color: #f5f5f5;
}

.movie-info {
  font-weight: bold;
}

.favorite-button {
  margin-left: 10px;
}

/* Additional CSS styles */
h3 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

.movie-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.movie-item:hover {
  background-color: #f1e96b;
}

.movie-info {
  flex: 1;
  margin-right: 10px;
}

.favorite-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.favorite-button:hover {
  background-color: rgb(18, 138, 146);
  scale: 1.1;
  border-radius: 10px;
  
}

</style>


<script>
import { useStore } from '@/store';

export default {
  data() {
    return {
      peliculas: [
        {
          "id": 1,
          "title": "Inception",
          "director": "Christopher Nolan",
          "releaseYear": 2010,
          "genre": "Sci-Fi",
          "rating": 8.8
        },
        {
          "id": 2,
          "title": "The Shawshank Redemption",
          "director": "Frank Darabont",
          "releaseYear": 1994,
          "genre": "Drama",
          "rating": 9.3
        },
        {
          "id": 3,
          "title": "The Dark Knight",
          "director": "Christopher Nolan",
          "releaseYear": 2008,
          "genre": "Action",
          "rating": 9.0
        },
        {
          "id": 4,
          "title": "Pulp Fiction",
          "director": "Quentin Tarantino",
          "releaseYear": 1994,
          "genre": "Crime",
          "rating": 8.9
        },
        {
          "id": 5,
          "title": "Forrest Gump",
          "director": "Robert Zemeckis",
          "releaseYear": 1994,
          "genre": "Drama",
          "rating": 8.8
        },
        {
          "id": 6,
          "title": "The Godfather",
          "director": "Francis Ford Coppola",
          "releaseYear": 1972,
          "genre": "Crime",
          "rating": 9.2
        },
        {
          "id": 7,
          "title": "Schindler's List",
          "director": "Steven Spielberg",
          "releaseYear": 1993,
          "genre": "Biography",
          "rating": 8.9
        },
        {
          "id": 8,
          "title": "Fight Club",
          "director": "David Fincher",
          "releaseYear": 1999,
          "genre": "Drama",
          "rating": 8.8
        },
        {
          "id": 9,
          "title": "The Matrix",
          "director": "Lana Wachowski, Lilly Wachowski",
          "releaseYear": 1999,
          "genre": "Action",
          "rating": 8.7
        },
        {
          "id": 10,
          "title": "Goodfellas",
          "director": "Martin Scorsese",
          "releaseYear": 1990,
          "genre": "Crime",
          "rating": 8.7
        },
        {
          "id": 11,
          "title": "The Silence of the Lambs",
          "director": "Jonathan Demme",
          "releaseYear": 1991,
          "genre": "Crime",
          "rating": 8.6
        },
        {
          "id": 12,
          "title": "The Usual Suspects",
          "director": "Bryan Singer",
          "releaseYear": 1995,
          "genre": "Crime",
          "rating": 8.5
        },
        {
          "id": 13,
          "title": "Se7en",
          "director": "David Fincher",
          "releaseYear": 1995,
          "genre": "Crime",
          "rating": 8.6
        },
        {
          "id": 14,
          "title": "The Green Mile",
          "director": "Frank Darabont",
          "releaseYear": 1999,
          "genre": "Crime",
          "rating": 8.6
        },
        {
          "id": 15,
          "title": "Saving Private Ryan",
          "director": "Steven Spielberg",
          "releaseYear": 1998,
          "genre": "Drama",
          "rating": 8.6
        },
        {
          "id": 16,
          "title": "Inglourious Basterds",
          "director": "Quentin Tarantino",
          "releaseYear": 2009,
          "genre": "Adventure",
          "rating": 8.3
        },
        {
          "id": 17,
          "title": "The Departed",
          "director": "Martin Scorsese",
          "releaseYear": 2006,
          "genre": "Crime",
          "rating": 8.5
        },
        {
          "id": 18,
          "title": "Gladiator",
          "director": "Ridley Scott",
          "releaseYear": 2000,
          "genre": "Action",
          "rating": 8.5
        },
        {
          "id": 19,
          "title": "The Prestige",
          "director": "Christopher Nolan",
          "releaseYear": 2006,
          "genre": "Drama",
          "rating": 8.5
        },
        {
          "id": 20,
          "title": "The Pianist",
          "director": "Roman Polanski",
          "releaseYear": 2002,
          "genre": "Biography",
          "rating": 8.5
        },

      ],
    };
  },
  
  methods: {
    async fetchData() {
      try {
        //const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=1f2b0d1f1b0c4b3b3b3b3b3b3b3b3b3b&language=en-US&page=1');
        //this.peliculas = await response.json();
      } catch (error) {
        console.log(error);
      }

      },
      agregarFavorito(pelicula) {
        const store = useStore();
        store.agregarFavorito(pelicula);
      },
    },

  };
</script>
  