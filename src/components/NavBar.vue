<script setup>
defineProps({
  logoName: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="d-flex align-items-center justify-content-between">
    <div class="logo-name">
      <h1>{{ logoName }}</h1>
    </div>
    <div class="spacer"></div>
    <div class="menu"></div>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
      </nav>
    </div>
  </div>
</template>

<style scoped>
  h1 {
    font-size: 1.3em;
    color: var(--gruv-green-dark);
  }
  a {
    color: var(--gruv-green-dark);
  }
</style>
