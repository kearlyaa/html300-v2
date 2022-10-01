<template>
  <div>
    <header>
      <nav>
        <ul>
          <li><NuxtLink to="/about">About</NuxtLink> </li>
          <li><NuxtLink to="/portfolio">Portfolio</NuxtLink></li>
          <li><NuxtLink to="/process">Process</NuxtLink> </li>
          <li><NuxtLink to="/contactus">Contact Us</NuxtLink></li>
        </ul>
      </nav>
    </header>
    
    
    <Nuxt /> <!-- This is where the page markup will be populated depending on the route -->

    <footer>
      <!-- footer code goes here -->
    </footer>
  </div>
</template>
