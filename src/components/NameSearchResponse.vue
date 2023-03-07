<template>
  <div class="container">

    <el-dialog
      title="Tips"
      width="30%"
      v-model="dialogVisible"
    >

      <template #header>
        <span>Result</span>
      </template>

      <div v-if="$store.state.foundName">
        <p>Congratulations, <em>{{ $store.state.inptName }}</em> is a lucky name! You've won a prize. Will you accept it?</p>

        <el-button
          @click.prevent="$store.commit( 'addWinner' )"
          type="success"
        >Accept</el-button>
        <el-button
          @click.prevent="$store.commit( 'dismiss' )"
          type="danger"
        >Reject</el-button>
      </div>
      <div v-else>
        <p>I'm sorry, <em>{{ $store.state.inptName }}</em> is not in today's list of lucky names.</p>
        <el-button
          @click.prevent="$store.commit( 'dismiss' )"
          type="danger"
        >Ok</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import { ElButton, ElDialog } from 'element-plus';

export default {
  name: 'NameSearchResponse',
  components: {
    ElButton,
    ElDialog,
  },
  computed: {
    dialogVisible: {
      get() {
        return this.$store.state.showMsg;
      },
      set() {
        this.$store.commit( 'dismiss' );
      }
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 50%;
}
</style>
