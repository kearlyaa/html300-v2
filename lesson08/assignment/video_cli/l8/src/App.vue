<template>
  <div id="app">
    <Navbar />
    <router-view />
    <ContactForm />
    <post v-for="(post, id) in posts"
      :post="post"
      :key="id">
  </post>
  </div>
</template>

<script>
//imports pages
import Navbar from './Navbar.vue';
import Post from './post.vue';
import ContactForm from './form.vue';

export default {
  components: {
    Navbar,
    ContactForm,
    Post
  },
  data() {
    return {
      posts: [
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