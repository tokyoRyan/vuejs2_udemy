<template>
  <div class="card mb-4">
    <div class="card-header bg-success text-light">
      <strong>{{ name }}</strong>  {{ `(Price: ${price})` }}
    </div>
    <div class="card-body">
      <input type="text" class="form-control float-left" placeholder="Quantity">
      <a href="#" class="btn btn-success float-right">Buy</a>
    </div>
  </div>
</template>

<script>
    export default {
      props: ['name', 'price']
    }
</script>

<style scoped>
.card-body input[type=text]{
  width: auto;
}
</style>
