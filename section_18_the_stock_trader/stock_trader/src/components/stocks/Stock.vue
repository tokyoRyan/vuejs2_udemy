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
          placeholder="Quantity"
        />
        <button
          class="btn btn-success float-right"
          @click="buyStock"
          :disabled="quantity <= 0"
        >
          Buy
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0,
    }
  },
  computed: {},
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      }
      console.log(order)
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
