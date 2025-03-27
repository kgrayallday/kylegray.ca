<script setup>
  import { ref, onMounted } from 'vue';
  import { getBlogPosts } from '../api/blog.js';

  const blogPosts = ref([]);

  onMounted(async () => {
    try {
      const data = await getBlogPosts();
      console.log('fetched blog posts:', data);
      blogPosts.value = data;
    } catch {
      console.error('Error in onMounted hook:', error);
    }
  });
</script>

<template>
  <div>
    <h1>Blog Posts</h1>
    <ul>
      <li v-for='post in blogPosts' :key='post.id'>
        <h3>{{ post.blog_title }}</h3>
        <p>{{ post.blog_body }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>
