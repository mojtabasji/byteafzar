<template>
    <ScrollVideo />
    <Services />
    <div class="projects">
        <h2>سوابق همکاری ما</h2>
        <div class="row">
            <div class="project" v-for="project in projects.slice(0, 2)" :key="project.id"
                @click="openLink(project.link)">
                <img :src="imageSrc(project)" alt="project image" />
                <h3>{{ project.name }}</h3>
                <p>{{ project.description }}</p>
            </div>
            <div class="project not-mobile" v-for="project in projects.slice(2, 4)" :key="project.id"
                @click="openLink(project.link)">
                <img :src="imageSrc(project)" alt="project image" />
                <h3>{{ project.name }}</h3>
                <p>{{ project.description }}</p>
            </div>
        </div>
        <button @click="openLink('https://bytecraft.ir/projects', false)"> مشاهده بیشتر</button>
    </div>
    <Contact />
    <Footer />
</template>

<script lang="ts">
import ScrollVideo from '../components/ScrollVideo.vue';
import Services from '../components/Services.vue';
import Footer from '../components/Footer.vue';
import Contact from '../components/Contact.vue';
import projectsList from '../../public/projects.json';

export default {
    name: 'HomeContent',
    components: {
        ScrollVideo,
        Services,
        Contact,
        Footer
    },
    data() {
        return {
            message: 'Hello, Home Content!',
            projects: projectsList
        };
    },
    methods: {
        openLink(link: string, _blank = true) {
            window.open(link, _blank ? '_blank' : '_self');
        },
        imageSrc(project) {
            return `../../public/images/${project.image}`;
        }

    },
    mounted() {
        // this.projects = require('../../public/projects.json');
    }

};
</script>

<style scoped lang="scss">
.projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
    padding-top: 50px;
    padding-bottom: 80px;
    background: var(--color-main-background);
    width: 100%;
    color: var(--color-main-text);

    .not-mobile {
        @media (max-width: 768px) {
            display: none !important;
        }
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-self: center;
        width: 100%;
        margin-top: 50px;
        text-align: center;
    }

    h2 {
        color: var(--color-secondary);
        font-size: 1.8em;
        font-weight: bold;
        margin-bottom: 10px;
    }

    h3 {
        color: var(--color-main-text);
        font-size: 1.4em;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .project {
        background: var(--color-secondary-background);
        border-radius: 15px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-self: center;
        max-width: 170px;
        min-height: 300px;
        margin: 25px;
        flex-wrap: wrap-reverse;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s;
        cursor: pointer;

        p {
            color: var(--color-secondary-text);
            font-size: 0.9em;
            max-width: 150px;
        }

        img {
            width: 80%;
            aspect-ratio: 1/1;
            object-fit: cover;
            margin-bottom: 20px;
            border-radius: 80px;
            filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.39));
        }
    }

    .project:hover {
        transform: translateY(-10px);
        box-shadow: 0px 8px 15px rgba(0, 255, 150, 0.2);
    }

    button {
        margin-top: 50px;
        padding: 15px 50px;
    }
}
</style>

