<template>
  <div class="container">

    <div v-if="$store.state.showMsg">
      <div v-if="$store.state.foundName">
        <p>Congratulations, <em>{{ $store.state.inptName }}</em> is a lucky name! You've won a prize. Will you accept it?</p>
        <a
          @click.prevent="$store.commit( 'addWinner' )"
          href="#."
        >Accept</a>
        <a
          @click.prevent="$store.commit( 'dismiss' )"
          href="#."
        >Reject</a>
      </div>
      <div v-else>
        <p>I'm sorry, <em>{{ $store.state.inptName }}</em> is not in today's list of lucky names.</p>
        <a
          @click.prevent="$store.commit( 'dismiss' )"
          href="#."
        >Ok</a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'NameSearchResponse',
}
</script>

<style scoped lang="scss">
.container {
  width: 50%;
}
</style>
