<template>
    <div class="hype-container-xxxl py-5">
        <Carousel :itemsToShow="3" :autoplay="3000" :wrapAround="true" :transition="500">
            <Slide v-for="slide in projects" :key="slide.id">
                <div class="carousel__item">
                    <img class="img-fluid" :src="store.imgBasePath + slide.image_url" :alt="slide.name" />
                </div>
            </Slide>
        </Carousel>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { store, storeMethods } from '../store';
import axios from 'axios';

export default defineComponent({
    name: 'AppProjectsList',
    data() {
        return {
            store,
            projects: []
        }
    },
    components: {
        Carousel,
        Slide
    },
    mounted() {
        axios.get(this.store.apiBaseUrl + '/projects').then((res) => {
            console.log(res.data.results);
            this.projects = res.data.results;
        });
    }
});
</script>

<style scoped>
.carousel__slide {
    padding: 5px;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
}
</style>