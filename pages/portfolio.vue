<template>
<main>
  <h1> Portfolio </h1>
    <div class="container container-fl"><!--fluid container spans the entire viewport-->
      <div class="row">
        <div class="col-sm">
          <img class="img-fluid" img="./static/images/plant1.jpeg" alt="Pink cherry blossom flower"><!-- images are classed with img-fluid for responsivity when screen changes sizes, and rounded for more visual interest-->
        </div>
        <div class="col-sm">
          <img class="img-fluid" img="./static/images/plant2.jpeg"  alt="Purple phlox">
        </div>
      </div>

      <div class="row">
        <div class="col-sm">
          <img class="img-fluid" img="./static/images/plant3.jpeg"  alt="Hot pink peony blossom">
        </div>
        <div class="col-sm">
          <img class="img-fluid" img="./static/images/plant4.jpeg"  alt="Light purple foxglove flower">
        </div>
      </div>
      <!--popover function added with popper.js, a function to tell the button what to do when clicked, and info provided in a small bubble once the button is clicked-->
      <div>
        <!-- the following script tags won't work like this, need to create a Vue method down below in the script tags-->
        <!-- <script>$(function () {$('[data-toggle="popover"]').popover()})</script> -->
        <button type="button" class="btn btn-info" data-toggle="popover" title="Booked!">Click to Book</button>
      </div>
    </div>

  </main>

</template>

<script>
export default {
     name: 'portfolio',
     methods: {
      // Methods/functions can go here
     }
     
}
</script>
