<script setup>
  import { computed, defineProps, resolveComponent} from 'vue';
  import VueIcon from './icons/VueIcon.vue';

  const props = defineProps({
    skill: String,
  })

  const icons = {
    vue: VueIcon,
  }

  const IconComponent = computed( () => icons[props.skill] || null);

</script>

<template>
  <div class="container">
    <div class="skill-pill">
      <div class="sp-icon sp-child">
        <component v-if="IconComponent" :is="IconComponent" class="icon" />
      </div>
      <div class="sp-text sp-child">
        <span class="text">{{ skill }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skill-pill {
  background-color: rgba(255,255,255, 20%);
  backdrop-filter: blur(0.75em);
  padding: 0.5em;
  border-radius: 4px;
  display: flex;
  align-items: center;
}
.sp-icon {
  width: 16px;
  height: 16px;
  fill: #b8bb26;
}
.sp-child {
  margin-left: 4px;
  margin-right: 4px;
}
.sp-text {
  color: #fbf1c7;
}
</style>
