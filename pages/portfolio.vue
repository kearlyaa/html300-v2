<template>
<!DOCTYPE html>
<html lang="en">
  <head>

  <title>Plant Portraits</title>
  </head>

  <body>
        <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>

    <header>
      <div>
      <a href="#main-content" class="hidden">Skip to main content</a>
        <h1>Portfolio</h1>
        </div>
    </header>

<!--inline nav bar-->
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
    </div>
<main>
      <div class="container container-fl"><!--fluid container spans the entire viewport-->
        <div class="row">
          <div class="col-sm">
            <img class="img-fluid" src="./components/images/plant1.jpeg" alt="Pink cherry blossom flower"><!-- images are classed with img-fluid for responsivity when screen changes sizes, and rounded for more visual interest-->
          </div>
          <div class="col-sm">
            <img class="img-fluid" src="./components/images/plant2.jpeg"  alt="Purple phlox">
          </div>
        </div>

        <div class="row">
          <div class="col-sm">
            <img class="img-fluid" src="./components/images/plant3.jpeg"  alt="Hot pink peony blossom">
          </div>
          <div class="col-sm">
            <img class="img-fluid" src="./components/images/plant4.jpeg"  alt="Light purple foxglove flower">
          </div>
        </div>
<!--popover function added with popper.js, a function to tell the button what to do when clicked, and info provided in a small bubble once the button is clicked-->
        <div>
          <script>$(function () {$('[data-toggle="popover"]').popover()})</script>
          <button type="button" class="btn btn-info" data-toggle="popover" title="Booked!">Click to Book</button>
        </div>
      </div>

    </main>
  </body>
</html>
</template>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"></script>

<script>
export default {
     name: 'portfolio'
}
</script>

