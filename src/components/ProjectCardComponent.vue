<template>
    <div class="card-container py-5 mb-2">
        <div class="custom-card mx-auto text-white hype-w-90x100 p-4" ref="cardEnter" :class="metaSort">
            <div class="front-layer h-100 d-flex flex-column justify-content-between">
                <h2 class="text-center p-3 fs-1 hype-text-shadow">{{ propsProject.title }}</h2>
                <div class="p-3" ref="frontLayerDetails">
                    <h4 class="hype-text-shadow">Type:
                        <span v-if="propsProject.type">{{ propsProject.type.name }}</span>
                        <span v-else>No Type</span>
                    </h4>
                    <h4 class="hype-text-shadow">Date of Creation: {{ propsProject.created }}</h4>
                    <div class="d-flex gap-3">
                        <h4 class="hype-text-shadow">Techonlogies:</h4>
                        <div v-if="propsProject.technologies" class="d-flex align-items-center gap-3 flex-wrap">
                            <div v-for="technology in propsProject.technologies" :key="technology.id"
                                class="tec-link position-relative"><i class="fs-3 hype-text-shadow position-relative"
                                    :class="technology.icon" :style="{ color: technology.color }"
                                    @mouseenter="hover(technology.name)" @mouseleave="lefthover(technology.name)">
                                </i>
                                <div class="tec-info" :ref="technology.name">
                                    {{ technology.name }}
                                </div>
                            </div>
                        </div>
                        <h4 v-else>No Technology</h4>
                    </div>
                    <div class="text-center mt-4">
                        <router-link :to="`/projects/${propsProject.slug}`" @click="store.api_data.singleProject = {}"
                            class="mine-custom-btn mb-3 align-self-center" role="button">
                            More Details
                        </router-link>
                    </div>
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
                    <div class="blurred-background p-3 position-absolute" ref="blurred">
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
            store,
            contianerHeight: '10px',
            icons: []
        };
    },
    props: {
        metaSort: {
            type: String,
            required: false
        },
        propsProject: {
            type: Object,
            required: true
        }
    },
    computed: {
    },
    mounted() {
        this.$nextTick(() => {
            this.propsProject.technologies.forEach(element => {
                this.icons.push({
                    name: element.name,
                    originalWidth: this.$refs[element.name][0].offsetWidth,
                })
                this.$refs[element.name][0].style.width = `0px`;
            });
            this.$refs['blurred'].style.height = this.$refs['frontLayerDetails'].offsetHeight + 20 + 'px';

        });
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
                    entry.target.style.transform = "rotateY(0deg) rotateX(0deg)"
                } else {
                    if (window.innerWidth > 1200) {
                        entry.target.className.includes('custom-card-even') ? entry.target.style.transform = "rotateY(-20deg) rotateX(0deg)" : entry.target.style.transform = "rotateY(20deg) rotateX(0deg)"

                    } else {
                        entry.target.style.transform = "rotateY(0deg) rotateX(15deg)"
                    }

                }
            });
        }, {
            threshold: 0.7 // Imposta il threshold al 50%
        });
        observer.observe(this.$refs.cardEnter);



        // @click.prevent="store.methods.getSingleProject(propsProject.slug)"
    },
    methods: {
        hover(name) {
            let findIcon = this.icons.filter(element => element.name === name)[0];
            this.$refs[name][0].style.padding = '0px 7.5px';
            this.$refs[name][0].style.width = `${findIcon.originalWidth + 20}px`;
        },
        lefthover(name) {
            this.$refs[name][0].style.padding = '0px';
            this.$refs[name][0].style.width = `0px`;
        }
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
    max-width: 475px;
    width: 475px;
    max-height: 700px;
    height: 700px;
    color: #000000;
    transform: rotateY(0deg) rotateX(15deg);
    transform-style: preserve-3d;
    transition: transform 0.5s;

    &:hover {
        transform: rotateY(0deg) rotateX(0deg);
    }

    @media screen and (min-width: 767px) {
        max-width: 550px;
        width: 550px;
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
        bottom: 10px;
        z-index: 100;
        bottom: 0px
    }

    p {
        height: 100px;
        overflow-y: auto;
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