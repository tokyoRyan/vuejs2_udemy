<template>
  <div>
    <h3>Stocks</h3>
    <div class="row">
      <app-buy-stock-item
        v-bind:key="stock.id"
        v-for="stock in stocks"
        :stock="stock"
      ></app-buy-stock-item>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import BuyStockItem from '../components/stocks/BuyStockItem'
const { mapActions } = createNamespacedHelpers('stocks')
export default {
  data() {
    return {
      stocks: [],
    }
  },
  methods: {
    ...mapActions(['initStore']),
  },
  mounted() {
    this.initStore()
  },
  components: {
    'app-buy-stock-item': BuyStockItem,
  },
}
</script>

<style scoped></style>
