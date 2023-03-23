<template>
    <div>
        <h2>{{ title }}</h2>
        <!-- <img class="img-fluid pb-3 ml-3 mr-3" @click="toggleBorder()">{{ src }} -->
        <p @click="toggleBorder()">{{ alt }}</p>
    </div>
</template>

<script>
import toggleBorder from '../mixins/toggleBorder'

    export default {
        name: 'Images',
        props: {
            title: String, 
            src: String, 
            alt: String,
        },
        mixins: [toggleBorder],
    }
</script>

<style scoped>
p {
    font-style: italic;
}
</style>