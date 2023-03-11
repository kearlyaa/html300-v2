<template>
  <main class="main">
    <div class="container">
      <div class="container-fluid">
        <div>
          <h1>Enjoy some movie related images!</h1>
        </div>
        <!-- display images in 2 rows -->
        <div class="row">
          <div class="col-sm" v-for="image in images1" :key="image.id">
            <!-- Updated src to use require() so dynamic links work -->
            <img :src="require('@/images/'+image.url)" class="img-fluid" alt="Movie themed images">
          </div>
        </div>

        <div class="row">
          <div class="col-sm" v-for="image in images2" :key="image.id">
            <img :src="require('@/images/'+image.url)" class="img-fluid" alt="Movie themed images">
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
        { id: 1, url: 'camera1.jpg' },
        { id: 2, url: 'theater.jpg' },
        { id: 3, url: 'theater1.jpg' },
      ],
      images2: [
        { id: 4, url: 'film1.jpg' },
        { id: 5, url: 'theater2.jpg' },
        { id: 6, url: 'popcorn2.jpg' },
      ],
      images3: [
        { id: 7, url: 'film2.jpg' },
        { id: 8, url: 'theater3.jpg'},
    ],
    };
  },
};
</script>