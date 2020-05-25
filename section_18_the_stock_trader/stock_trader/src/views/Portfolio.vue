<template>
  <div>
    <h3>Portfolio</h3>
    <div class="row">
      <app-sell-stock-item
        :name="'BMW'"
        :price="110"
        :quantity="10"
      ></app-sell-stock-item>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import SellStockItem from '../components/stocks/SellStockItem'
const { mapActions } = createNamespacedHelpers('stocks')
export default {
  mounted() {
    this.initStore()
  },
  methods: {
    ...mapActions(['initStore']),
  },
  components: {
    'app-sell-stock-item': SellStockItem,
  },
}
</script>

<style scoped></style>
