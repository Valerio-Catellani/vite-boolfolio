<template>
    <div class="cont_principal" :class="{ cont_error_active: active }">
        <div class="cont_error hype-unselectable">
            <h1>Oops</h1>
            <p>The Page you're looking for isn't here.</p>
        </div>
        <div class="cont_aura_1"></div>
        <div class="cont_aura_2"></div>
    </div>
</template>

<script>
export default {

    name: 'NotFound',
    data() {
        return {
            active: false
        }
    },

    mounted() {
        setTimeout(() => {
            this.active = true;
        }, 1000)
    }
}




</script>



<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

* {
    margin: 0px auto;
    padding: 0px;
    text-align: center;
}




.cont_principal {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.cont_error {
    position: absolute;
    width: 100%;
    height: 300px;
    top: 50%;
    margin-top: -150px;
}

.cont_error>h1 {
    font-weight: 400;
    font-size: 150px;
    color: #fff;
    position: relative;
    left: -100%;
    transition: all 0.5s;
    transition-delay: 1s;
}


.cont_error>p {
    font-weight: 300;
    font-size: 24px;
    letter-spacing: 5px;
    color: #9294AE;
    position: relative;
    left: 100%;
    transition: all 0.5s;
    transition-delay: 0.5s;
    -webkit-transition: all 0.5s;
    -webkit-transition-delay: 0.5s;
}

.cont_aura_1 {
    position: absolute;
    width: 300px;
    height: 120%;
    top: 25px;
    right: -340px;
    background-color: rgb(83, 4, 4);
    box-shadow: 0px 0px 60px 20px rgba(140, 0, 0, 0.5);
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
}

.cont_aura_2 {
    position: absolute;
    width: 100%;
    height: 300px;
    right: -10%;
    bottom: -301px;
    background-color: rgba(140, 0, 0, 1);
    box-shadow: 0px 0px 60px 10px rgba(140, 0, 0, 0.5), 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
    z-index: 5;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
}

.cont_error_active>.cont_error>h1 {
    left: 0%;
}

.cont_error_active>.cont_error>p {
    left: 0%;
}

.cont_error_active>.cont_aura_2 {
    animation-name: animation_error_2;
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    transform: rotate(-20deg);
}

.cont_error_active>.cont_aura_1 {
    transform: rotate(20deg);
    right: -170px;
    animation-name: animation_error_1;
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

@-webkit-keyframes animation_error_1 {
    from {
        -webkit-transform: rotate(20deg);
        transform: rotate(20deg);
    }

    to {
        -webkit-transform: rotate(25deg);
        transform: rotate(25deg);
    }
}

@-o-keyframes animation_error_1 {
    from {
        -webkit-transform: rotate(20deg);
        transform: rotate(20deg);
    }

    to {
        -webkit-transform: rotate(25deg);
        transform: rotate(25deg);
    }

}

@-moz-keyframes animation_error_1 {
    from {
        -webkit-transform: rotate(20deg);
        transform: rotate(20deg);
    }

    to {
        -webkit-transform: rotate(25deg);
        transform: rotate(25deg);
    }

}

@keyframes animation_error_1 {
    from {
        -webkit-transform: rotate(20deg);
        transform: rotate(20deg);
    }

    to {
        -webkit-transform: rotate(25deg);
        transform: rotate(25deg);
    }
}




@-webkit-keyframes animation_error_2 {
    from {
        -webkit-transform: rotate(-15deg);
        transform: rotate(-15deg);
    }

    to {
        -webkit-transform: rotate(-20deg);
        transform: rotate(-20deg);
    }
}

@-o-keyframes animation_error_2 {
    from {
        -webkit-transform: rotate(-15deg);
        transform: rotate(-15deg);
    }

    to {
        -webkit-transform: rotate(-20deg);
        transform: rotate(-20deg);
    }
}


@-moz-keyframes animation_error_2 {
    from {
        -webkit-transform: rotate(-15deg);
        transform: rotate(-15deg);
    }

    to {
        -webkit-transform: rotate(-20deg);
        transform: rotate(-20deg);
    }
}

@keyframes animation_error_2 {
    from {
        -webkit-transform: rotate(-15deg);
        transform: rotate(-15deg);
    }

    to {
        -webkit-transform: rotate(-20deg);
        transform: rotate(-20deg);
    }
}
</style>