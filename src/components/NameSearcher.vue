<template>
  <div class="container">
    <el-alert
      v-if="$store.state.error !== ''"
      type="error"
      :title="$store.state.error"
      @close="$store.commit( 'closeErr' )"
    />

    <div v-if="$store.state.winners[$store.state.day].length">
      <winners />
      <router-link to="/winners">
        Show winners
      </router-link>

      <el-button
        @click="$store.commit( 'changeDay' )"
      >
        Next day
      </el-button>
    </div>

    <el-row>
      <el-input
        v-model="inptName"
        type="text"
        placeholder="Type you name"
        :disabled="$store.state.showMsg"
        clearable
        @keydown="$store.dispatch( 'checkName', $event )"
      />
      <el-button
        :disabled="$store.state.showMsg || !$store.state.validEmail"
        @click="$store.dispatch( 'checkName' )"
      >
        Submit
      </el-button>
    </el-row>
  </div>

  <name-search-response />
</template>

<script>
import NameSearchResponse from '@/components/NameSearchResponse.vue';
import { ElInput, ElButton, ElRow, ElMessage, ElAlert } from 'element-plus';
import Winners from '@/components/Winners.vue';
import { RouterLink } from 'vue-router';

export default {
  name: 'NameSearcher',
  components: {
    NameSearchResponse,
    ElInput,
    ElButton,
    ElRow,
    ElMessage,
    ElAlert,
    Winners,
    RouterLink,
  },
  computed: {
    inptName: {
      get() {
        return this.$store.state.inptName;
      },
      set( val ) {
        this.$store.commit( 'updateInpt', val );
      },
    },
  },
  watch: {
    inptName( newInpt ) {

      if ( newInpt.trim().length < 2 || newInpt.match( /[0-9]/g ) ) {
        this.$store.commit( 'updateValid', false );
        return;
      }

      this.$store.commit( 'updateValid', true );

    },
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 50%;
}
</style>