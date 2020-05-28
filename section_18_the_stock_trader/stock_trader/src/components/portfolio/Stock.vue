<template>
  <div class="col-md-4 col-xs-6">
    <div class="card mb-4">
      <div class="card-header bg-info text-light">
        <strong>{{ stock.name }}</strong>
        <small>{{
          `(Price: ${stock.price}|Quantity: ${stock.quantity})`
        }}</small>
      </div>
      <div class="card-body">
        <input
          type="number"
          v-model="quantity"
          class="form-control float-left"
          placeholder="Quantity"
        />
        <button
          class="btn btn-danger float-right"
          @click="onSellClicked"
          :disabled="quantity <= 0 || insufficientQuantity"
        >
          Sell
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('portfolio')
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0,
    }
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity
    },
  },
  methods: {
    ...mapActions(['sellStock']),
    onSellClicked() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      }
      this.sellStock(order)
      this.quantity = 0
    },
  },
}
</script>

<style scoped>
.card-body input[type='number'] {
  width: auto;
}
</style>
