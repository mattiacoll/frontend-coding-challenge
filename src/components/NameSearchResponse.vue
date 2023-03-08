<template>
  <div class="container">
    <el-dialog
      v-model="dialogVisible"
      title="Tips"
      width="30%"
    >
      <template #header>
        <span>Result</span>
      </template>

      <div v-if="$store.state.duplicate">
        <p>I'm sorry, {{ $store.state.inptName }} has already received their prize today!</p>
        <el-button
          type="danger"
          @click.prevent="$store.commit( 'dismiss' )"
        >
          Ok
        </el-button>
      </div>
      <div v-else>
        <div v-if="$store.state.foundName">
          <p>Congratulations, <em>{{ $store.state.inptName }}</em> is a lucky name! You've won a prize. Will you accept it?</p>

          <el-button
            type="success"
            @click.prevent="$store.commit( 'addWinner' )"
          >
            Accept
          </el-button>
          <el-button
            type="danger"
            @click.prevent="$store.commit( 'dismiss' )"
          >
            Reject
          </el-button>
        </div>
        <div v-else>
          <p>I'm sorry, <em>{{ $store.state.inptName }}</em> is not in today's list of lucky names.</p>
          <el-button
            type="danger"
            @click.prevent="$store.commit( 'dismiss' )"
          >
            Ok
          </el-button>
        </div>
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
      },
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 50%;
}
</style>