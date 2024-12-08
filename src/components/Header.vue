<template>
    <header class="header">
        <nav class="navbar">
            <div class="logo">
                <img src="../assets/logo_image.png" alt="logo" />
                <a href="/"><span>Byte</span>Afzar</a>
            </div>
            <ul class="nav-links">
                <li><a href="#home">خانه</a></li>
                <li><a href="#services">خدمات ما</a></li>
                <li><a href="#projects">نمونه کارها</a></li>
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
    background-color: #33333366;
    color: white;
    padding: 1rem;
    position: absolute;
    align-self: center;
    width: 100%;
    box-sizing: border-box;
    transition: all 0.5s ease;
    z-index: 10;

    .logo {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        a {
            font-size: 2.5rem;
            font-weight: bold;
        }

        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }

        span {
            color: var(--color-secondary);
        }
    }

}

ul {
    li {
        margin-left: 1.2rem;
        
        a {
            font-weight: bold;
            &:hover {
                // remove text underline
                text-decoration: none;
                color: var(--color-secondary);
            }
        }
    }
}

.sticky {
    position: sticky;
    top: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    border-radius: 30px;
    background-color: var(--color-secondary-background);
    transition: all 0.5s ease;
    box-shadow: 0 0 8px 5px rgba(0, 0, 0, 0.4);

    ul {
        margin: 0;
        padding-inline-start: 0;
    }

    .logo {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        img {
            width: 28px;
            height: 28px;
            border-radius: 50%;
        }

        a {
            font-size: 1.4rem;
        }

        span {
            color: var(--color-secondary);
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