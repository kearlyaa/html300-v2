<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">My Website</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home Page</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/image" class="nav-link">Image Page</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/top3" class="nav-link">Top 3 Page</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/form" class="nav-link">Contact Us</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  