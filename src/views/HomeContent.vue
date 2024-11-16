<template>
    <ScrollVideo />
    <Services />
    <br />
    <div class="projects">
        <div class="row">
            <div class="project" v-for="project in projects.slice(0, 4)" :key="project.id" @click="openLink(project.link)">
                <h2>{{ project.name }}</h2>
                <p>{{ project.description }}</p>
            </div>
        </div>
        <div class="row not-mobile">
            <div class="project" v-for="project in projects.slice(4, 8)" :key="project.id" @click="openLink(project.link)">
                <h2>{{ project.name }}</h2>
                <p>{{ project.description }}</p>
            </div>
        </div>
        <button>
            < View Project</button>
    </div>
    <br />
    <Contact />
    <Footer />
</template>

<script>
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
        openLink(link) {
            window.open(link, '_blank');
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
    background-color: var(--color-main-background);
    width: 100%;

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
    }

    .project {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-self: center;
        min-width: 200px;
        max-width: 300px;
        margin: 50px;
        flex-wrap: wrap-reverse;
    }

    button {
        background-color: var(--color-secondary);
        color: var(--color-main-text);
        padding: 10px 20px;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        box-shadow: 0px 0px 17px var(--color-secondary);

        &:hover {
            background-color: transparent;
            border: 2px solid var(--color-secondary);

        }
    }
}
</style>
