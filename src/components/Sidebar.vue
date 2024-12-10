<template>
    <aside class="sidebar">
        <div class="sidebar__logo">
            <img src="../assets/logo_image.png" alt="Logo" />
        </div>
        <nav class="sidebar__nav">
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/about">About</router-link>
                </li>
                <li>
                    <router-link to="/services">Services</router-link>
                </li>
                <li>
                    <router-link to="/contact">Contact</router-link>
                </li>
            </ul>
        </nav>
    </aside>
    <div class="sidebar__overlay" @click="closeSidebar">
    </div>
</template>


<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Sidebar',
    props: {
        title: String,
        sidebar: Boolean,

    },
    setup() {
        return {
            title: 'My Website'
        }
    },
    methods: {
        closeSidebar() {
            this.$emit('close-sidebar');
        }
    },
    mounted() {
    }
});

</script>

<style scoped lang="scss">
.sidebar {
    direction: rtl;
    background-color: #333333c5;
    color: white;
    padding: 1rem;
    position: fixed;
    align-self: center;
    width: 40%;
    height: 100vh;
    right: 0;
    box-sizing: border-box;
    transition: all 0.1s ease;
    z-index: 10;

    &__logo {
        img {
            width: 100%;
        }
    }

    &__nav {
        ul {
            list-style: none;
            padding: 0;

            li {
                margin: 1rem 0;

                a {
                    color: white;
                    text-decoration: none;
                    font-size: 1.2rem;
                }
            }
        }
    }

    &.sticky {
        position: sticky;
        top: 10px;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
        border-radius: 30px;
        background-color: #333333;
        transition: all 0.5s ease;
    }
}

.sidebar__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 60%;
    height: 100vh;
    direction: rtl;
    z-index:10;
}

</style>
