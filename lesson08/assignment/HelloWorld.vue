<template>
  <div class="hello">
    <MyPortfolio />
    <MyImages />
  </div>
</template>

<script>
import MyPortfolio from './pages/MyPortfolio.vue'
import MyImages from './pages/MyImages.vue'

export default {
  name: 'HelloWorld',
  components: {
    MyPortfolio
  },
}
</script>
