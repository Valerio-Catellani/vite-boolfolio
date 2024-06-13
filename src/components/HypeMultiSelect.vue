<template>
    <form action="">
        <div class="p-5">
            <div>
                <span class="text-white badge text-bg-secondary fs-6 me-3 my-3 d-inline-flex align-items-center"
                    v-for="element in selectedElements" :key="element.id">
                    <span class="text-white badge text-bg-secondary fs-6 me-1 p-0" @click="removeElement(element.id)">
                        <i class="fa-solid fa-xmark fs-3 hype-text-shadow hype-hover-size hype-pointer"></i>
                    </span>
                    <span>
                        {{ element.name }}
                    </span>
                </span>
            </div>
            <select name="type" id="type" class="form-select" v-model="activeElement" @change="addElement">
                <option value="" active>All</option>
                <option :value="element.id" v-for="element in arrayElements" :key="element.id"
                    :disabled="disbaleOptions(element.id)">{{
                        element.name
                    }}
                </option>
            </select>
        </div>
        <br>
        <button class="btn btn-primary" type="submit">Submit</button>
    </form>
</template>

<script>
export default {
    name: 'HypeMultiSelect',
    data() {
        return {
            activeElement: '',
            selectedElements: []
        }
    },
    props: {
        arrayElements: Array
    },
    methods: {
        addElement() {
            let element = this.arrayElements.filter(element => element.id === this.activeElement)[0];
            if (!this.selectedElements.includes(element) && this.activeElement !== '') {
                this.selectedElements.push(element);
            }
        },
        removeElement(id) {
            this.selectedElements = this.selectedElements.filter(element => element.id !== id);
        },
        disbaleOptions(id) {
            if (this.selectedElements.includes(this.arrayElements.filter(element => element.id === id)[0])) {
                return true;
            } else {
                return false;
            }
        }

    },

}
</script>

<style lang="scss" scoped></style>
