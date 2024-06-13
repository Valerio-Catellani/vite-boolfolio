<template>
    <JumboComponent :img_name="'/public/images/jumbo.jpg'"></JumboComponent>
    <div class="hype-container-xxxl py-5">
        <!-- <HypeMultiSelect :arrayElements="test"></HypeMultiSelect> -->
        <Carousel :itemsToShow="3" :autoplay="3000" :wrapAround="true" :transition="500" class="py-5">
            <Slide v-for="slide in store.api_data.AllProjects.data" :key="slide.id">
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
import { store } from '../store';
import JumboComponent from '@/components/JumboComponent.vue';
import HypeMultiSelect from '@/components/HypeMultiSelect.vue'

export default defineComponent({
    name: 'AppHome',
    data() {
        return {
            store,
            projects: [],
            test: [
                {
                    id: 1,
                    name: 'test1',
                },
                {
                    id: 2,
                    name: 'test2',
                },
                {
                    id: 3,
                    name: 'test3',
                }
            ]
        }
    },
    components: {
        Carousel,
        Slide,
        JumboComponent,

    },
    mounted() {
    }

});
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;


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

.carousel__slide--active {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    opacity: 1 !important;
    transform: rotateY(-10deg) scale(0.95) !important;
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