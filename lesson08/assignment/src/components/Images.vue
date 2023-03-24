<template>
    <div>
        <h2>{{ title }}</h2>
        <img>
        <p :class="[isActive ? '.hasBorder' : '.noBorder']" @click="toggleBorder()">{{ alt }}</p>
    </div>
</template>

<script>
    const toggleBorder = {
        data: {
            isActive: false,
        },
        methods: {
            toggleBorder() {
                this.isActive = !this.isActive;
            }
        }
    }
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
img {
    padding-bottom: 3rem;
    margin: 0 3rem;
}
.hasBorder {
    border: 5px solid red;
}
.noBorder {
    border: none;
}
</style>