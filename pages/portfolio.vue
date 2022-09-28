<template>
<!DOCTYPE html>
<html lang="en">
  <head>

  <title>Plant Portraits</title>
  </head>

  <body>
        

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
            <img class="img-fluid" src="./static/images/plant1.jpeg" alt="Pink cherry blossom flower"><!-- images are classed with img-fluid for responsivity when screen changes sizes, and rounded for more visual interest-->
          </div>
          <div class="col-sm">
            <img class="img-fluid" src="./static/images/plant2.jpeg"  alt="Purple phlox">
          </div>
        </div>

        <div class="row">
          <div class="col-sm">
            <img class="img-fluid" src="./static/images/plant3.jpeg"  alt="Hot pink peony blossom">
          </div>
          <div class="col-sm">
            <img class="img-fluid" src="./static/images/plant4.jpeg"  alt="Light purple foxglove flower">
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

