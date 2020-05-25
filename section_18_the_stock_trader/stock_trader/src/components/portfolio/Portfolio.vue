<template>
  <div class="col-md-4 col-xs-6">
    <div class="card mb-4">
      <div class="card-header bg-info text-light">
        <strong>{{ name }}</strong>
        <small>{{ `(Price: ${price}|Quantity: ${quantity})` }}</small>
      </div>
      <div class="card-body">
        <input
          type="number"
          class="form-control float-left"
          placeholder="Quantity"
        />
        <button class="btn btn-danger float-right">Sell</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'price', 'quantity'],
}
</script>

<style scoped>
.card-body input[type='number'] {
  width: auto;
}
</style>
