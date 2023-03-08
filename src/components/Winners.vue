<template>
  <div v-if="$store.state.winners[$store.state.day].length">
    <h2>Today's winners:</h2>
    <div v-for="(winner, index) in $store.state.winners[$store.state.day]">
      <p :key="index">
        {{ winner }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Winners',
};
</script>