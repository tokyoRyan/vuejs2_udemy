<template>
  <div class="card text-center">
    <div class="card-header">
      <h1>Trade or View your Portfolio</h1>
      <p>You may Save & Load  your data</p>
      <p>Click on 'End Day' to begin a new day!</p>
    </div>
    <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    <div class="card-footer">
      {{ `Your Funds: ${funds}` }}
    </div>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex'
  const { mapGetters } = createNamespacedHelpers('stocks')
    export default {
      computed: {
        ...mapGetters(['funds'])
      }
    }
</script>

<style scoped>

</style>
