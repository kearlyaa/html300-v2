<template>
  <div id="app">
    <Navbar />
    <router-view />
    <ContactForm />
  </div>
</template>

<script>

import Navbar from './Navbar.vue';
import Home from '/Home.vue';
import ImagePage from './imagepage.vue';
import Top3 from './top3.vue';
import ContactForm from './form.vue';

export default {
  components: {
    Navbar,
    ContactForm,
  },
  data() {
    return {
      searchTerm: '',
        movies: [],
      images: [
        {
          src: "../images/camera1.jpg",
          alt: "Camera 1",
        },
        {
          src: "../images/theater.jpg",
          alt: "Theater",
        },
        {
          src: "../images/theater1.jpg",
          alt: "Theater 1",
        },
      ],
      images2: [
        {
          src: "../images/film2.jpg",
          alt: "Film 2",
        },
        {
          src: "../images/camera2.jpg",
          alt: "Camera 2",
        },
        {
          src: "../images/popcorn1.jpg",
          alt: "Popcorn 1",
        },
      ],
      movies: [
          {
            title: "The Shawshank Redemption",
            imgUrl:
              "https://img.omdbapi.com/?i=tt0111161&h=600&apikey=b77d742c",
          },
          {
            title: "The Godfather",
            imgUrl:
              "https://img.omdbapi.com/?i=tt0068646&h=600&apikey=b77d742c",
          },
          {
            title: "The Dark Knight",
            imgUrl:
              "https://img.omdbapi.com/?i=tt0468569&h=600&apikey=b77d742c",
          },
        ],
    };
  },
},

router: {
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/image',
        name: 'imagepage',
        component: ImagePage,
      },
      {
        path: '/top3',
        name: 'Top3',
        component: Top3,
      },
    ],
  };
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
