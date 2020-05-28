<template>
  <div class="jumbotron">
    <h1 class="display-4">Trade or View your Portfolio</h1>
    <p class="lead">Trade or View your Portfolio</p>
    <p>You may Save & Load your data</p>
    <p>Click on 'End Day' to begin a new day!</p>
    <hr class="my-4" />
    <p class="font-weight-bold">Your Funds: {{ funds | currency }}</p>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('portfolio')
export default {
  computed: {
    ...mapGetters(['funds']),
  },
}
</script>

<style scoped></style>
