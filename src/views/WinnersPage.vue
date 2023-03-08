<template>
  <div class="container">
    <h2>Winners Page</h2>
    <winners />
    <router-link to="/">
      Home
    </router-link>
  </div>
</template>

<script>
import Winners from '@/components/Winners.vue';
import { RouterLink } from 'vue-router';

export default {
  name: 'WinnersPage',
  components: {
    Winners,
    RouterLink,
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 50%;
}
</style>