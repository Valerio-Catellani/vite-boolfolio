<template>
    <div class="card-container px-3 py-5 mb-2" @click="console.log(propsProject)">
        <div class="custom-card mx-auto text-white hype-w-90x100 p-4" :class="metaSort">
            <div class="front-layer h-100 d-flex flex-column justify-content-between">
                <h2 class="text-center p-3 fs-1 hype-text-shadow">{{ propsProject.title }}</h2>
                <div class="blurred-background p-3">
                    <h4 class="hype-text-shadow">Type: {{ propsProject.type.name }}</h4>
                    <div class="d-flex gap-3">
                        <h4 class="hype-text-shadow">Techonlogies:</h4>
                        <div v-if="propsProject.technologies" class="d-flex align-items-center gap-3 flex-wrap">
                            <a v-for="technology in propsProject.technologies" :key="technology.id"
                                class="tec-link hype-pointer position-relative" href="#"><i
                                    class="fs-3 hype-text-shadow position-relative" :class="technology.icon"
                                    :style="{ color: technology.color }">
                                </i>
                                <!-- <div class="tec-info">
                                            {{ technology.name }}
                                        </div> -->
                            </a>
                        </div>
                        <h4 v-else>No Technology</h4>
                    </div>

                    <p>
                        {{ propsProject.description }}
                    </p>
                </div>
            </div>
            <div class="layers">
                <div class="layer"></div>
                <div class="layer"></div>
                <div class="layer"></div>
                <div class="layer"></div>
                <div class="layer">

                </div>
                <div class="layer"></div>
                <div class="layer"></div>
                <div class="layer"></div>
                <div class="layer"></div>
                <div class="layer last">
                    <div class="img-container shadow position-relative">
                        <img class=" hype-unselectable h-100" :src="store.imgBasePath + propsProject.image_url">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';

export default {
    data() {
        return {
            store
        }
    },
    props: {
        metaSort: String,
        propsProject: Object
    },


}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");




.card-container {
    perspective: 50em;

    &:nth-child(1) {
        --bi: repeating-linear-gradient(45deg,
                rgba(0, 0, 0, 0.9) 54%,
                rgba(140, 0, 0, 1) 99%);

    }

}

.custom-card {
    position: relative;
    max-width: 500px;
    width: 500px;
    max-height: 700px;
    height: 700px;
    color: #000000;
    transform: rotateY(0deg) rotateX(15deg);
    transform-style: preserve-3d;
    transition: transform 0.5s;

    &:hover {
        transform: rotateY(0deg) rotateX(0deg);
    }


    .img-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        /* Adjust as needed */
        width: 100%;
        /* Adjust as needed */
        overflow: hidden;
    }

    .img-container img {
        display: block;
        max-width: 100%;
        max-height: 100%;
        margin: auto;
        object-fit: cover;
    }

    .blurred-background {
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border-radius: 10px;
        width: calc(100% - 0px);
        height: 300px;
        bottom: 10px;
    }

}

.layers {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    z-index: -1;
}

.layer {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 1em;

    transform: translateZ(var(--tz));
    box-shadow: 0 0 0.5em #000d inset;

    @for $i from 0 to 10 {
        &:nth-child(#{$i + 1}) {
            --tz: #{$i * -4}px;
        }
    }

    &:last-child {
        box-shadow: 0 0 0.5em #000d inset, 0 0 5px #000;
    }
}


@media screen and (min-width: 1200px) {
    .custom-card-even {
        transform: rotateY(-20deg) rotateX(0deg);
    }

    .custom-card-odd {
        transform: rotateY(20deg) rotateX(0deg);
    }
}
</style>