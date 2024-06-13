<template>
    <JumboComponent :img_name="'/public/images/jumbo.jpg'"></JumboComponent>
    <h1 class="text-center hype-text-shadow text-white display-1">Contact Us</h1>
    <div class="container">
        <div class="row">
            <form class="col-12 col-xl-6 text-start" @submit.prevent="sendForm()">
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control border-0 border-bottom" id="name" placeholder="Name"
                        v-model="name">
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control border-0 border-bottom" id="email" placeholder="Email"
                        v-model="email">
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Content</label>
                    <textarea class="form-control border-0 border-bottom" cols="30" rows="10" id="message"
                        placeholder="Insert message..." v-model="message"></textarea>
                </div>
                <br>


                <button :disabled="loading" class="mine-custom-btn text-white" type="submit">Send</button>


            </form>
        </div>
    </div>
</template>

<script>
import JumboComponent from '@/components/JumboComponent.vue';
import { store } from '../store';
import axios from 'axios';

export default {
    data() {
        return {
            store,
            name: '',
            email: '',
            message: '',
            loading: false
        }
    },

    methods: {

        sendForm() {
            const data = {
                name: this.name,
                address: this.email,
                message: this.message
            }
            this.loading = true
            axios.post(`${store.apiBaseUrl}/contacts`, data).then((response) => {
                console.log(response.data);
            })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    this.name = '';
                    this.email = '';
                    this.message = '';
                    this.loading = false
                })
        }
    },

    components: {
        JumboComponent
    },

}
</script>

<style lang="scss" scoped></style>