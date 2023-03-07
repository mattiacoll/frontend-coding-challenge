<template>
  <div class="container">

    <el-row>
      <el-input 
        type="text"
        placeholder="Type you name"
        v-model="inptName"
        :disabled="$store.state.showMsg"
        clearable 
      />
      <el-button 
        @click="$store.dispatch( 'checkName' )"
        :disabled="$store.state.showMsg"
      >Submit</el-button>
    </el-row>

  </div>

  <name-search-response></name-search-response>
</template>

<script>
import NameSearchResponse from '@/components/NameSearchResponse.vue'
import { ElInput, ElButton, ElRow } from 'element-plus';

export default {
  name: 'NameSearcher',
  components: {
    NameSearchResponse,
    ElInput,
    ElButton,
    ElRow,
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
