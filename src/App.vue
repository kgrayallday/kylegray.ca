<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <header>
    <NavBar logoName="Kyle Gray" />
  </header>

  <RouterView />
</template>

<style scoped>

header {
  position: sticky;
  top:0;
}

nav a.router-link-exact-active {
  color: var(--kg-fg);
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
