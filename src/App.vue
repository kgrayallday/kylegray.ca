<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import PageFooter from './components/PageFooter.vue'
</script>

<template>
  <header>
    <NavBar logoName="Kyle Gray" />
  </header>
  <main>
  <RouterView />
  </main>
  <footer>
    <PageFooter />
  </footer>
</template>

<style scoped>
header {
  position: sticky;
  top:0;
  width: 100%;
  background: var(--kg-col-violet);
  padding: .75rem 0;
}
main {
  height: 100%;
  max-width: var(--kg-dim-width);
  margin: auto;
}
footer {
  width: 100%;
  height: 200px;
  background-color: var(--kg-col-bg-acc-dark);
}
/* Large Screens */
@media (min-width: 1024px) {
}
</style>
