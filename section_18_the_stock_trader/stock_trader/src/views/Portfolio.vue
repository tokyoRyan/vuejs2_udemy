<template>
  <div>
    <h3>Portfolio</h3>
    <div class="row">
      <app-portfolio :name="'BMW'" :price="110" :quantity="10"></app-portfolio>
    </div>
  </div>
</template>

<script>
import Portfolio from '../components/portfolio/Portfolio'
export default {
  methods: {},
  components: {
    'app-portfolio': Portfolio,
  },
}
</script>

<style scoped></style>
