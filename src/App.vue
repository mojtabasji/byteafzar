<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <div class="Container" id="home">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.Container {
  display: flex;
  flex-direction: column;
}

.test {
  font-size: 3rem;
  align-items: center;
  justify-content: center;
  align-self: center;
}
</style>
