<template>
    <div>
        <h2>{{ title }}</h2>
        <img 
            :src="src" 
            :alt="alt" 
            :class="[isActive ? 'hasBorder' : 'noBorder']" 
            @click="toggleBorder()"
        />
        <!-- <p :class="[isActive ? '.hasBorder' : '.noBorder']" @click="toggleBorder()">{{ alt }}</p> -->
    </div>
</template>

<script>
    const toggleBorder = {
        data() {
            return{
                isActive: false,
            }
        },
        methods: {
            toggleBorder() {
                this.isActive = !this.isActive;
                console.log('test')
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