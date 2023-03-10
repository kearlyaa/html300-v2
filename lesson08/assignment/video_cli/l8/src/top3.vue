<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">My Website</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Home Page</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="image-pg.html">Image Page</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="details.html">Top 3 Page</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="form.html">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
  
      <div>
        <h1>Can you guess the IMDB users' top 3 movies?</h1>
      </div>
  
      <div class="container">
        <div class="container-fluid">
          <!-- 3 accordion features will be generated-->
          <div class="accordion" id="accordion1">
            <!-- accordion generation-->
            <div v-for="(movie, index) in movies" :key="index" class="accordion-item">
              <h2 class="accordion-header" :id="'headingOne'+index">
                <button
                  class="accordion-button"
                  type="button"
                  data-toggle="collapse"
                  :data-target="'#collapseOne'+index"
                  :aria-controls="'collapseOne'+index"
                  data-toggle="tooltip"
                  title="Click to expand/collapse"
                >
                  {{ movie.title }}
                </button>
              </h2>
              <div
                :id="'collapseOne'+index"
                class="accordion-collapse collapse"
                :aria-labelledby="'headingOne'+index"
                data-parent="#accordion1"
              >
                <div class="accordion-body">
                  <div>
                    <h2>{{ movie.title }}</h2>
                    <img class="img-thumbnail" :src="movie.imgUrl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  