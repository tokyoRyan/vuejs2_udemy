<template>
  <div class="col-md-4 col-xs-6">
    <div class="card mb-4">
      <div class="card-header bg-success text-light">
        <strong>{{ stock.name }}</strong>
        <small>{{ `(Price: ${stock.price})` }}</small>
      </div>
      <div class="card-body">
        <input
          type="number"
          v-model="quantity"
          class="form-control float-left"
          :class="{ danger: insufficientFunds }"
          placeholder="Quantity"
        />
        <button
          class="btn btn-success float-right"
          @click="buyStockClick"
          :disabled="quantity <= 0 || insufficientFunds"
        >
          Buy
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('stocks')
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0,
    }
  },
  computed: {
    funds() {
      return this.$store.getters['portfolio/funds']
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds
    },
  },
  methods: {
    ...mapActions(['buyStock']),
    buyStockClick() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      }
      this.buyStock(order)
      this.quantity = 0
    },
  },
}
</script>

<style scoped>
.card-body input[type='number'] {
  width: auto;
}
.danger {
  border: 1px solid red;
}
</style>
