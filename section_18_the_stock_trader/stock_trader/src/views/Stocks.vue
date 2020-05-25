<template>
  <div>
    <h3>Stocks</h3>
    <div class="row">
      <app-stock
        v-bind:key="stock.id"
        v-for="stock in stocks"
        :stock="stock"
      ></app-stock>
    </div>
  </div>
</template>

<script>
import Stock from '../components/stocks/Stock'
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('stocks')
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['stocks']),
  },
  components: {
    'app-stock': Stock,
  },
}
</script>

<style scoped></style>
