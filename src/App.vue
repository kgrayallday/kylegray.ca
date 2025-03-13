<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/Nav.vue'
</script>

<template>
  <header>
    <Nav logoName="Kyle Gray" />
  </header>

  <RouterView />
</template>

<style scoped>

header {
  position: sticky;
  top:0;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
}

nav a:first-of-type {
}

/* Large Screens */
@media (min-width: 1024px) {
}
</style>
