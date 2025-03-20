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
    <div>
      <a>{{ logoName }}</a>
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
  <a @click="$router.go(-1)" class="text-primary"><<</a>
</template>

<style scoped>
  .menu {
    display: none;
  }
  .logo-name h1 {
    color: var(--kg-fg);
  }
  .menu-link{
    color: var(--kg-fg);
  }
</style>
