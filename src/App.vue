<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router';
import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <div class="Container">
    <RouterView />
  </div>
</template>

<style scoped>
.Container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200vh;
}

.test {
  font-size: 3rem;
  align-items: center;
  justify-content: center;
  align-self: center;
}
</style>
