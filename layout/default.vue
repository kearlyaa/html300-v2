<template>
  <div>
    <header>
  <div>
  <a href="#main-content" class="hidden">Skip to main content</a>

    <h1>Plant Portraits</h1>
  </div>
</header>
<div class="topnav">
<nav>
  <ul>
  <li><NuxtLink to="/about">About</NuxtLink> 
  <li><NuxtLink to="/portfolio">Portfolio</NuxtLink>
  <li><NuxtLink to="/process">Process</NuxtLink> 
  <li><NuxtLink to="/contactus">Contact Us</NuxtLink>
</li>
</ul>
</nav>
    <Nuxt />
  </div>
  
<div>
  <footer>
      <img src=# alt="Logo">
  <p>Aborpos nisto inci tet aut que volupti beruptiberro to ex<br>esseque invenienihil imaximu scideru ptistiusam consequunt</p>
  <nav>
    <ul>
  <li><NuxtLink to="/about">About</NuxtLink> 
  <li><NuxtLink to="/portfolio">Portfolio</NuxtLink>
  <li><NuxtLink to="/process">Process</NuxtLink> 
  <li><NuxtLink to="/contactus">Contact Us</NuxtLink>
  </li>
    </ul>
  </nav>
  <p><small>© 2022 Plant Portraits LLC | Seattle, WA</small></p>
  </footer>
  </div>
</template>

<script>
export default {
  layout: 'about', 'portfolio', 'process', 'contactus',
  }
}
</script>
