<template>
    <div class="main-content">
        <h1>Gallery</h1>
        <Images 
            v-for="(image, index) in images"
            :key="index"
            :title="images.title"
        />
        <!-- <div class="img-wrapper">
            <img v-for="(image, index) in images" 
            :key="index" 
            :src="require(`@/assets/images/${image.src}`)" 
            :alt="image.alt" 
            class="img-fluid w-75 pb-3">
        </div> -->
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
                images: [
                    {title: 'Lake', src: 'img1.jpg', alt: 'a lake in Washington state'},
                    {title: 'Waterfall', src: 'img2.jpg', alt: 'a waterfall in Washington state'},
                    {title: 'Forest', src: 'img3.jpg', alt: 'a forest in Washington state'}
                ]
            }
        }
    }
</script>
