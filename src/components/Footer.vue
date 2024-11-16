<template>
    <footer class="footer">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
    </footer>
</template>

<script lang="ts">

export default {
    name: 'Footer',
    data() {
        return {
            message: 'Hello, Footer!'
        };
    },
}
</script>

<style scoped>
.footer {
    height: 50px;
    background-color: #333;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    width: 100%;
}
</style>