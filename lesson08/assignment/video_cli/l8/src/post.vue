<!--img includes  props src, alt and title-->
<template>
    <div class="post">   
      <img :src="src" :alt="alt" :title="title" :style="borderStyle" @click="toggleBorder">
    </div>
  </template>
  
  <script>
  //creates mixin that shows border when clicked
  const borderMixin = {
    data() {
      return {
        isBorderVisible: false,
      };
    },
    methods: {
      toggleBorder() {
        this.isBorderVisible = !this.isBorderVisible;
      },
    },
    computed: {
      borderStyle() {
        return {
          border: this.isBorderVisible ? '2px solid black' : 'none',
        };
      },
    },
  };
  //componenets
  export default {
    name: 'post',
    props: {
      src: {
        type: String,
        required: false,
      },
      alt: {
        type: String,
        required: false,
      },
      title: {
        type: String,
        default: '',
      },
    },
    mixins: [borderMixin],
  };
  </script>
  <!--defines how images are styled-->
  <style lang="scss">
  .post {
    display: inline-block;
    margin: 10px;
  }
  </style>
  