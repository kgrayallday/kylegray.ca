<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import PageFooter from './components/PageFooter.vue'
</script>

<template>
  <header>
    <NavBar logoName="Kyle Gray" />
  </header>

  <RouterView />
  <footer>
    <PageFooter />
  </footer>
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

footer {
  position: absolute;
  bottom:0px;
  width: 100%;
  height: 200px;
}
/* Large Screens */
@media (min-width: 1024px) {
}
</style>
