<template>
  <main class="main">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">My Website</router-link>
      <!-- creates navbar as a button that starts collapsed -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
       
        @click="isNavbarOpen = !isNavbarOpen"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div :class="['collapse', 'navbar-collapse', { show: isNavbarOpen }]" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home Page</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/image-page" class="nav-link active">Image Page</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/top3-page" class="nav-link">Top 3 Page</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/form-page" class="nav-link">Contact Us</router-link>
          </li>
        </ul>
      </div>
    </nav>
   
    <div class="container">
      <div class="container-fluid">
        <div>
          <h1>Enjoy some movie related images!</h1>
        </div>
        <!-- display images in 2 rows -->
        <div class="row">
          <div class="col-sm" v-for="image in images1" :key="image.id">
            <img :src="image.url" class="img-fluid" alt="Movie themed images">
          </div>
        </div>

        <div class="row">
          <div class="col-sm" v-for="image in images2" :key="image.id">
            <img :src="image.url" class="img-fluid" alt="Movie themed images">
          </div>
        </div>

      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      isNavbarOpen: false,
      images1: [
        { id: 1, url: '../images/camera1.jpg' },
        { id: 2, url: '../images/theater.jpg' },
        { id: 3, url: '../images/theater1.jpg' },
      ],
      images2: [
        { id: 4, url: '../images/film1.jpg' },
        { id: 5, url: '../images/theater2.jpg' },
        { id: 6, url: '../images/popcorn2.jpg' },
      ],
      images3: [
        { id: 7, url: '../images/film2.jpg' },
        { id: 8, url: '../images/theater3.jpg'},
    ],
    };
  },
};
