<template>
    <div class="main-content">
        <br />
    </div>
    <ScrollVideo />
    <div class="third-content">
        <br />
    </div>
</template>

<script>
import ScrollVideo from '../components/ScrollVideo.vue';


export default {
    name: 'HomeContent',
    components: {
        ScrollVideo
    },
    data() {
        return {
            message: 'Hello, Home Content!'
        };
    },
    methods: {
        // Add your methods here


    },

};
</script>

<style scoped>
.main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    /* background-color: rgba(238, 244, 168, 0.841); */
}

.third-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    /* background-color: rgb(158, 113, 81); */
}
</style>