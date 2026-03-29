<script setup>
import { RouterView } from 'vue-router'
import SiteNav from './components/SiteNav.vue'
</script>

<template>
  <div class="app-root">
    <SiteNav />
    <div class="app-main">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.app-root {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
}

.app-main {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
}
</style>
