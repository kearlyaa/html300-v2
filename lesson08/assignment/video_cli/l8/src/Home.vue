<template>
    <div>
  
      <div class="container">
        <h1>Welcome to my movie website! Search for a film here.</h1>
        <form id="movieForm" autocomplete="off">
          <div class="form-group">
            <label for="movie">Movie Name</label>
            <!-- <input class="form-control" type="text" id="movie" placeholder="Movie" v-model="searchTerm"> -->
          </div>
          <div class="form-group">
            <button class="btn btn-block btn-outline-primary" data-bs-toggle="tooltip" data-bs-placement="right" title="Click here" @click="searchMovie">
              Search Movie
            </button>
          </div>
        </form>
  
        <div id="result">
          <div class="card" v-for="movie in movies" :key="movie.imdbID">
            <img :src="movie.Poster" class="card-img-top" alt="movie poster">
            <div class="card-body">
              <h5 class="card-title">{{ movie.Title }}</h5>
              <p class="card-text">{{ movie.Year }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    export default{
      data() {
        return {
          movies: [],
          searchterm: ''
        }
      },
      methods: {
        searchMovie() {
          const apiKey = '86aac794'; // my API key
          const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${this.searchTerm}&type=movie`;
          
          fetch(url)
            .then(response => response.json())
            .then(data => {
              if (data.Search) {
                this.movies = data.Search;
              } else {
                this.movies = [];
              }
            })
            .catch(error => console.error(error));
        },
      },
    }
    
 
  </script>
  
  