<script setup>
defineProps({
  logoName: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="container">
    <div class="logo-name">
      <h1 class="green">{{ logoName }}</h1>
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
  font-weight: 500;
  font-size: 1.6rem;
}

h3 {
  font-size: 1.2rem;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid gray;
}

</style>
