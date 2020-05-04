<template>
  <div class="container" id="app">
    <h1>VueX</h1>
    <app-result></app-result>
    <app-counter></app-counter>
    <app-async-counter></app-async-counter>
  </div>
</template>

<script>
  import Counter from './components/Counter.vue';
  import AsyncCounter from './components/AsyncCounter.vue';
  import Result from './components/Result.vue';
export default {
  components: {
    'app-counter': Counter,
    'app-async-counter': AsyncCounter,
    'app-result': Result,
  }
}
</script>

<style>

</style>
