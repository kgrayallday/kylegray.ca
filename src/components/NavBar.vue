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
        <RouterLink class='menu-link' to="/">Home</RouterLink>
        <RouterLink class='menu-link' to="/about">About</RouterLink>
        <RouterLink class='menu-link' to="/blog">Blog</RouterLink>
      </nav>
    </div>
  </div>
</template>

<style scoped>
  .logo-name h1 {
    font-size: 1.3em;
    color: var(--gruv-lightgreen-dark);
  }
  .menu-link{
    color: var(--gruv-lightgreen-dark);
  }
</style>
