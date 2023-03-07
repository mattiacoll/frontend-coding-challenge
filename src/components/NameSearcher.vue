<template>
  <div class="container"></div>

  <input 
    type="text"
    placeholder="Type you name"
    v-model="inptName"
    :disabled="$store.state.showMsg"
  >
  <button 
    @click="$store.dispatch( 'checkName' )"
    :disabled="$store.state.showMsg"
  >Submit</button>

  <name-search-response></name-search-response>
</template>

<script>
import NameSearchResponse from '@/components/NameSearchResponse.vue'

export default {
  name: 'NameSearcher',
  components: {
    NameSearchResponse,
  },
  computed: {
    inptName: {
      get() {
        return this.$store.state.inptName;
      },
      set( val ) {
        this.$store.commit( 'updateInpt', val );
      },
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 50%;
}
</style>
