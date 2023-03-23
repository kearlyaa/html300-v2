<template>
    <div class="main-content">
        <h1>Gallery</h1>
        <div class="img-wrapper">
            <Images 
            v-for="(item, index) in items" 
            :key="index" 
            :title="item.title"
            :src="require(`@/assets/images/${item.src}`)" 
            :alt="item.alt" />
        </div>
    </div>
</template>

<script>
import Images from '../components/Images.vue'

    export default {
        name: 'galleryPage', 
        components: {
            Images,
        },
        data() {
            return {
                items: [
                    {title: 'Lake', src: 'img1.jpg', alt: 'A lake in Washington state'},
                    {title: 'Waterfall', src: 'img2.jpg', alt: 'A waterfall in Washington state'},
                    {title: 'Forest', src: 'img3.jpg', alt: 'A forest in Washington state'}
                ]
            }
        }
    }
</script>
