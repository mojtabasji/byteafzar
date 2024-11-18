<template>
    <header class="header">
        <nav class="navbar">
            <div class="logo">
                <a href="/">ByteAfzar</a>
            </div>
            <ul class="nav-links">
                <li><a href="/">خانه</a></li>
                <li><a href="/about">نمونه کارها</a></li>
                <li><a href="#contact">گپ و گفت با ما</a></li>
            </ul>
            <i class="bi bi-list nav-menu" @click="sidebar = !sidebar"></i>
        </nav>
    </header>
    <Sidebar v-if="sidebar" @close-sidebar="closeSidebar" />
</template>

<script>
import { defineComponent } from 'vue';
import Sidebar from './Sidebar.vue';

export default {
    name: 'Header',
    props: {
        title: String
    },
    components: {
        Sidebar
    },
    data() {
        return {
            title: 'My Website',
            sidebar: false
        }
    },
    methods: {
        log() {
            console.log('Hello World');
        },
        handleScroll() {
            const header = document.querySelector('.header');
            if (window.scrollY > header.offsetHeight) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        },
        closeSidebar() {
            this.sidebar = false;
        }
    },
    mounted() {
        console.log('Component mounted');
        // event to scroll down more than header height
        window.addEventListener('scroll', this.handleScroll);
    }
}
</script>

<style scoped lang="scss">
.header {
    direction: ltr;
    background-color: #33333333;
    color: white;
    padding: 1rem;
    position: absolute;
    align-self: center;
    width: 100%;
    box-sizing: border-box;
    transition: all 0.5s ease;
    z-index: 10;
}

ul {
    li {
        margin-left: 1.2rem;
    }
}

.sticky {
    position: sticky;
    top: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    border-radius: 30px;
    background-color: #333333;
    transition: all 0.5s ease;

    ul {
        margin: 0;
        padding-inline-start: 0;
    }

    .logo {
        a {
            font-size: 1.2rem;
        }
    }
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
}

.logo a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
}

.nav-links {
    direction: rtl;
    list-style: none;
    display: flex;
    gap: 1rem;

    @media (max-width: 768px) {
        display: none;
    }
}

.nav-menu {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;

    @media (max-width: 768px) {
        display: block;
    }
}

.nav-links a {
    color: white;
    text-decoration: none;
}

.nav-links a:hover {
    text-decoration: underline;
}
</style>