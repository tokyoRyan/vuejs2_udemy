<template>
  <div class="card mb-4">
    <div class="card-header bg-info text-light">
      <strong>{{ name }}</strong>
      {{ `(Price: ${price}|Quantity: ${quantity})` }}
    </div>
    <div class="card-body">
      <input
        type="text"
        class="form-control float-left"
        placeholder="Quantity"
      />
      <a href="#" class="btn btn-danger float-right">Sell</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "price", "quantity"],
};
</script>

<style scoped>
.card-body input[type="text"] {
  width: auto;
}
</style>
