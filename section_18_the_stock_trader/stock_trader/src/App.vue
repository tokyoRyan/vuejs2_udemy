<template>
  <div id="app" class="container">
    <app-header></app-header>
    <div class="pt-3">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/shared/Header'
export default {
  components: {
    'app-header': Header,
  },
}
</script>

<style scoped></style>
